// Get all task elements
const tasksContainer = document.getElementById("tasks-container");
const tasks = tasksContainer.querySelectorAll(".task");

// Use a loop to add event listeners to all tasks dynamically
tasks.forEach(function (task) {
  const completeBtn = task.querySelector(".complete-btn");
  const removeBtn = task.querySelector(".remove-btn");

  // Add complete button functionality
  completeBtn.addEventListener("click", function () {
    task.classList.toggle("completed");

    // Update button text based on completion status
    if (task.classList.contains("completed")) {
      completeBtn.textContent = "Mark Incomplete";
    } else {
      completeBtn.textContent = "Mark Complete";
    }
  });

  // Add remove button functionality
  removeBtn.addEventListener("click", function () {
    task.style.display = "none";
  });
});

// Function to apply styling to all tasks using loops
function styleAllTasks() {
  tasks.forEach(function (task) {
    const taskInput = task.querySelector(".task-input");

    if (task.classList.contains("completed")) {
      taskInput.style.textDecoration = "line-through";
      taskInput.style.color = "#999";
    } else {
      taskInput.style.textDecoration = "none";
      taskInput.style.color = "#333";
    }
  });
}

// Apply initial styling to all tasks
styleAllTasks();
