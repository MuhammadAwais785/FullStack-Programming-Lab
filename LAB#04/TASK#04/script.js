$(document).ready(function () {
  // ===== TAB NAVIGATION =====

  /**
   * Switch to a specific tab
   * Uses jQuery DOM Manipulation and Effects
   */
  function switchTab(tabName) {
    // Get all tab buttons and content
    const $tabButtons = $(".tab-button");
    const $tabContents = $(".tab-content");
    const $activeButton = $(`[data-tab="${tabName}"]`);
    const $activeContent = $(`#${tabName}`);

    // Remove active class from all buttons
    $tabButtons.removeClass("active");

    // Add active class to clicked button
    $activeButton.addClass("active");

    // Update tab indicator position
    updateTabIndicator($activeButton);

    // Fade out all content
    $tabContents.fadeOut(300, function () {
      // Remove active class
      $(this).removeClass("active");
    });

    // After a short delay, fade in the selected content
    setTimeout(function () {
      $activeContent.addClass("active").fadeIn(500);

      // Smooth scroll to tab content with method chaining
      $("html, body").animate(
        { scrollTop: $activeContent.offset().top - 150 },
        800,
        "swing",
      );
    }, 150);
  }

  /**
   * Update the tab indicator underline position
   * Creates smooth visual feedback
   */
  function updateTabIndicator(activeButton) {
    const $indicator = $(".tab-indicator");
    const $button = $(activeButton);

    const position = $button.position().left;
    const width = $button.outerWidth();

    $indicator.animate(
      {
        left: position,
        width: width,
      },
      400,
      "swing",
    );
  }

  /**
   * Tab button click handler
   * Uses Event Handling
   */
  $(".tab-button").on("click", function () {
    const tabName = $(this).data("tab");
    switchTab(tabName);
  });

  /**
   * Keyboard navigation for tabs
   * Arrow keys to move between tabs, Enter to select
   */
  $(".tab-button").on("keydown", function (event) {
    const $buttons = $(".tab-button");
    const currentIndex = $buttons.index(this);
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      nextIndex = (currentIndex + 1) % $buttons.length;
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      nextIndex = (currentIndex - 1 + $buttons.length) % $buttons.length;
    }

    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      const nextTab = $buttons.eq(nextIndex).data("tab");
      switchTab(nextTab);
      $buttons.eq(nextIndex).focus();
    }
  });

  // Initialize tab indicator on page load
  initializeTabIndicator();

  /**
   * Initialize tab indicator position on load
   */
  function initializeTabIndicator() {
    const $activeButton = $(".tab-button.active");
    if ($activeButton.length) {
      const position = $activeButton.position().left;
      const width = $activeButton.outerWidth();
      $(".tab-indicator").css({
        left: position,
        width: width,
      });
    }
  }

  // ===== FAQ ACCORDION =====

  /**
   * FAQ accordion toggle
   * Uses DOM Manipulation for expanding/collapsing
   */
  $(".faq-question").on("click", function () {
    const $faqItem = $(this).parent();
    const $answer = $faqItem.find(".faq-answer");
    const $toggle = $(this).find(".faq-toggle");

    // Close other FAQ items
    $(".faq-item")
      .not($faqItem)
      .each(function () {
        $(this).removeClass("active");
        $(this).find(".faq-answer").slideUp(300);
        $(this).find(".faq-toggle").text("+");
      });

    // Toggle current item
    $faqItem.toggleClass("active");

    if ($faqItem.hasClass("active")) {
      $answer.slideDown(300);
      $toggle.text("−");
    } else {
      $answer.slideUp(300);
      $toggle.text("+");
    }
  });

  // ===== FORM HANDLING =====

  /**
   * Contact form submission
   */
  $("#contactForm").on("submit", function (event) {
    event.preventDefault();

    // Animate button
    const $submitBtn = $(this).find(".btn-submit");
    const originalText = $submitBtn.text();

    $submitBtn.prop("disabled", true).text("Sending...").css("opacity", 0.7);

    // Simulate form submission
    setTimeout(function () {
      $submitBtn.text("✓ Message Sent!").css("background-color", "#4caf50");

      // Reset form
      $("#contactForm")[0].reset();

      // Restore button after 3 seconds
      setTimeout(function () {
        $submitBtn.prop("disabled", false).text(originalText).css({
          opacity: "1",
          "background-color": "",
        });
      }, 3000);
    }, 1500);
  });

  // ===== UTILITY FUNCTIONS =====

  /**
   * Add smooth scroll behavior to price buttons
   */
  $(".btn-pricing").on("click", function () {
    $(this).animate({ opacity: 0.7 }, 100).animate({ opacity: 1 }, 100);
  });

  /**
   * Prevent default form submission on button hover
   */
  $(".btn")
    .on("mouseenter", function () {
      $(this).css("transform", "translateY(-2px)");
    })
    .on("mouseleave", function () {
      $(this).css("transform", "translateY(0)");
    });

  /**
   * Window resize handler to update tab indicator
   */
  $(window).on("resize", function () {
    const $activeButton = $(".tab-button.active");
    if ($activeButton.length) {
      const position = $activeButton.position().left;
      const width = $activeButton.outerWidth();
      $(".tab-indicator").css({
        left: position,
        width: width,
      });
    }
  });

  /**
   * Anchor link navigation
   * Jump to specific tab if URL contains hash
   */
  function handleAnchorNavigation() {
    const hash = window.location.hash.substring(1);
    if (hash && $(`#${hash}`).hasClass("tab-content")) {
      switchTab(hash);
    }
  }

  // Handle anchor on page load
  handleAnchorNavigation();

  // Handle anchor when hash changes
  $(window).on("hashchange", handleAnchorNavigation);
});
