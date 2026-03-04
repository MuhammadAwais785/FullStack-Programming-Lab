$(document).ready(function () {
  // ===== QUIZ DATA =====
  const quizData = [
    {
      question: "What does jQuery stand for?",
      options: ["Java Query", "JavaScript Query", "Just Query", "Java Quantum"],
      correct: 1,
    },
    {
      question:
        "Which method is used to select elements by class name in jQuery?",
      options: ["$('#id')", "$('.className')", "$('[attribute]')", "$(tag)"],
      correct: 1,
    },
    {
      question: "What is the correct syntax for jQuery AJAX?",
      options: [
        "$.ajax({...})",
        "$.post({...})",
        "$.get({...})",
        "All of the above",
      ],
      correct: 3,
    },
    {
      question: "Which jQuery method is used to hide elements?",
      options: ["$.hide()", "$().hide()", "$.display('none')", "$.remove()"],
      correct: 1,
    },
    {
      question: "What is the purpose of jQuery's .on() method?",
      options: [
        "Create elements",
        "Attach event handlers",
        "Load external files",
        "Validate forms",
      ],
      correct: 1,
    },
    {
      question: "Which of the following is a jQuery selector?",
      options: [
        "getElementByClass",
        "$('div')",
        "getElementById",
        "querySelector",
      ],
      correct: 1,
    },
    {
      question: "What does DOM stand for?",
      options: [
        "Document Object Model",
        "Data Object Markup",
        "Display Operating Method",
        "Digital Object Management",
      ],
      correct: 0,
    },
    {
      question: "Which jQuery method adds or removes classes?",
      options: [".class()", ".attr('class')", ".toggleClass()", ".setClass()"],
      correct: 2,
    },
    {
      question: "How do you animate elements in jQuery?",
      options: [".animate()", ".fadeIn()", ".slideUp()", "All of the above"],
      correct: 3,
    },
    {
      question: "Which method adds HTML content to an element?",
      options: [
        ".text()",
        ".html()",
        ".append()",
        "Both .html() and .append()",
      ],
      correct: 3,
    },
  ];

  // ===== STATE MANAGEMENT =====
  const state = {
    currentQuestion: 0,
    answers: [],
    score: 0,
    isComplete: false,
  };

  // ===== CACHE JQUERY ELEMENTS =====
  const $quizContainer = $("#quizContainer");
  const $resultsContainer = $("#resultsContainer");
  const $questionSection = $("#questionSection");
  const $questionText = $("#questionText");
  const $answerOptions = $("#answerOptions");
  const $progressFill = $("#progressFill");
  const $questionNumber = $("#questionNumber");
  const $currentQuestion = $("#currentQuestion");
  const $totalQuestions = $("#totalQuestions");
  const $answeredCount = $("#answeredCount");
  const $prevBtn = $("#prevBtn");
  const $nextBtn = $("#nextBtn");
  const $submitBtn = $("#submitBtn");
  const $notification = $("#notification");

  /**
   * Initialize quiz
   */
  function initializeQuiz() {
    // Initialize answers array
    state.answers = new Array(quizData.length).fill(null);
    state.currentQuestion = 0;
    state.score = 0;
    state.isComplete = false;

    // Set total questions
    $("#totalQuestions").text(quizData.length);
    $("#totalForCounter").text(quizData.length);

    // Load first question
    loadQuestion();

    // Show quiz container
    $quizContainer.removeClass("hidden").fadeIn(500);
    $resultsContainer.addClass("hidden");
  }

  /**
   * Load current question
   */
  function loadQuestion() {
    const question = quizData[state.currentQuestion];

    // Update question text with animation
    $questionText
      .fadeOut(200, function () {
        $(this).text(question.question);
      })
      .fadeIn(300);

    $currentQuestion.text(state.currentQuestion + 1);

    // Render answer options
    renderAnswerOptions(question);

    // Update progress bar
    updateProgressBar();

    // Update button states
    updateButtonStates();

    // Scroll to top
    $("html, body").animate({ scrollTop: 0 }, 400);
  }

  /**
   * Render answer options
   */
  function renderAnswerOptions(question) {
    const optionsHTML = question.options
      .map((option, index) => {
        const isSelected = state.answers[state.currentQuestion] === index;
        const selectedClass = isSelected ? "selected" : "";

        return `
                <div class="answer-option ${selectedClass}" data-index="${index}">
                    <input 
                        type="radio" 
                        name="answer" 
                        value="${index}" 
                        id="option${index}"
                        ${isSelected ? "checked" : ""}
                    >
                    <label for="option${index}" class="option-label">
                        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                        <span class="option-text">${option}</span>
                    </label>
                </div>
            `;
      })
      .join("");

    $answerOptions
      .fadeOut(200, function () {
        $(this).html(optionsHTML);
      })
      .fadeIn(300);

    // Attach event handlers to answer options
    attachAnswerHandlers();
  }

  /**
   * Attach event handlers to answer options
   */
  function attachAnswerHandlers() {
    $(".answer-option").on("click", function () {
      const selectedIndex = $(this).data("index");

      // Remove previous selection in this question
      $(".answer-option").removeClass("selected");
      $(this).addClass("selected");

      // Update state
      state.answers[state.currentQuestion] = selectedIndex;

      // Update answered count
      updateAnsweredCount();

      // Show notification
      showNotification("Answer saved!");

      // Animate the selection
      $(this).find("input").prop("checked", true);
    });
  }

  /**
   * Update progress bar
   */
  function updateProgressBar() {
    const progress = ((state.currentQuestion + 1) / quizData.length) * 100;
    $progressFill.css("width", progress + "%");
    $questionNumber.text(state.currentQuestion + 1);
  }

  /**
   * Update button states
   */
  function updateButtonStates() {
    // Previous button
    if (state.currentQuestion === 0) {
      $prevBtn.prop("disabled", true);
    } else {
      $prevBtn.prop("disabled", false);
    }

    // Next and Submit buttons
    if (state.currentQuestion === quizData.length - 1) {
      $nextBtn.addClass("hidden");
      $submitBtn.removeClass("hidden");
    } else {
      $nextBtn.removeClass("hidden");
      $submitBtn.addClass("hidden");
    }
  }

  /**
   * Update answered count
   */
  function updateAnsweredCount() {
    const answered = state.answers.filter((a) => a !== null).length;
    $answeredCount.text(answered);
  }

  /**
   * Navigate to previous question
   */
  $prevBtn.on("click", function () {
    if (state.currentQuestion > 0) {
      state.currentQuestion--;
      loadQuestion();
    }
  });

  /**
   * Navigate to next question
   */
  $nextBtn.on("click", function () {
    if (state.currentQuestion < quizData.length - 1) {
      state.currentQuestion++;
      loadQuestion();
    }
  });

  /**
   * Submit quiz
   */
  $submitBtn.on("click", function () {
    // Check if all questions are answered
    if (state.answers.includes(null)) {
      alert("Please answer all questions before submitting!");
      return;
    }

    // Calculate score
    calculateScore();

    // Show results
    displayResults();
  });

  /**
   * Calculate quiz score
   */
  function calculateScore() {
    state.score = 0;
    state.answers.forEach((answer, index) => {
      if (answer === quizData[index].correct) {
        state.score++;
      }
    });
  }

  /**
   * Display results with animations
   */
  function displayResults() {
    state.isComplete = true;

    // Hide quiz container
    $quizContainer.fadeOut(300, function () {
      $(this).addClass("hidden");
    });

    // Show results container
    $resultsContainer.removeClass("hidden").fadeIn(500);

    // Animate score
    animateScore();

    // Build review list
    buildReviewList();
  }

  /**
   * Animate score count up
   */
  function animateScore() {
    const totalQuestions = quizData.length;
    const percentage = Math.round((state.score / totalQuestions) * 100);

    // Counter animation
    let currentScore = 0;
    const countInterval = setInterval(() => {
      if (currentScore <= state.score) {
        $("#scoreValue").text(currentScore);
        currentScore++;
      } else {
        clearInterval(countInterval);
      }
    }, 50);

    // Update stats
    setTimeout(() => {
      $("#correctAnswers").text(state.score);
      $("#wrongAnswers").text(totalQuestions - state.score);
      $("#percentage").text(percentage + "%");

      // Show message based on score
      updateScoreMessage(percentage);
    }, state.score * 50);
  }

  /**
   * Update score message based on performance
   */
  function updateScoreMessage(percentage) {
    const $message = $("#scoreMessage");
    const $description = $("#scoreDescription");

    let message = "Great Job!";
    let description = "You got most questions right!";

    if (percentage === 100) {
      message = "🏆 Perfect Score!";
      description = "You're a jQuery expert!";
    } else if (percentage >= 80) {
      message = "🎉 Excellent!";
      description = "You have a strong understanding of jQuery!";
    } else if (percentage >= 60) {
      message = "👍 Good Job!";
      description = "You know jQuery concepts well!";
    } else if (percentage >= 40) {
      message = "📚 Keep Learning!";
      description = "Review jQuery concepts and try again!";
    } else {
      message = "💪 Keep Trying!";
      description = "Read more about jQuery and retake the quiz!";
    }

    $message.fadeOut(200, function () {
      $(this).text(message).fadeIn(300);
    });

    $description.text(description);
  }

  /**
   * Build answer review list
   */
  function buildReviewList() {
    const reviewHTML = quizData
      .map((question, index) => {
        const userAnswer = state.answers[index];
        const correctAnswer = question.correct;
        const isCorrect = userAnswer === correctAnswer;

        const statusIcon = isCorrect ? "✓" : "✗";
        const statusClass = isCorrect ? "review-correct" : "review-wrong";

        return `
                <div class="review-item ${statusClass}">
                    <div class="review-header">
                        <span class="review-status">${statusIcon}</span>
                        <span class="review-question">Question ${index + 1}: ${question.question}</span>
                    </div>
                    <div class="review-answers">
                        <div class="review-user-answer">
                            <strong>Your Answer:</strong> 
                            ${userAnswer !== null ? question.options[userAnswer] : "Not answered"}
                        </div>
                        <div class="review-correct-answer">
                            <strong>Correct Answer:</strong> 
                            ${question.options[correctAnswer]}
                        </div>
                    </div>
                </div>
            `;
      })
      .join("");

    $("#reviewList").html(reviewHTML);
  }

  /**
   * Restart quiz
   */
  $("#restartBtn").on("click", function () {
    $resultsContainer.fadeOut(300, function () {
      $(this).addClass("hidden");
    });

    initializeQuiz();
  });

  /**
   * Print results
   */
  $("#printBtn").on("click", function () {
    const printContent = `
Quiz Results
================
Score: ${state.score} / ${quizData.length}
Percentage: ${Math.round((state.score / quizData.length) * 100)}%

Question Review:
`;
    const review = quizData
      .map((question, index) => {
        const userAnswer = state.answers[index];
        const correctAnswer = question.correct;
        const isCorrect = userAnswer === correctAnswer ? "✓" : "✗";
        return `${isCorrect} Q${index + 1}: ${question.question}
  Your Answer: ${userAnswer !== null ? question.options[userAnswer] : "Not answered"}
  Correct Answer: ${question.options[correctAnswer]}`;
      })
      .join("\n");

    alert(printContent + review);
  });

  /**
   * Show notification message
   */
  function showNotification(message) {
    $notification.text(message).removeClass("hidden").fadeIn(200);

    setTimeout(() => {
      $notification.fadeOut(200, function () {
        $(this).addClass("hidden");
      });
    }, 2000);
  }

  /**
   * Keyboard navigation
   */
  $(document).on("keydown", function (e) {
    if (state.isComplete) return;

    if (e.key === "ArrowLeft") {
      $prevBtn.click();
    } else if (e.key === "ArrowRight") {
      $nextBtn.click();
    }
  });

  // Initialize quiz on page load
  initializeQuiz();
});
