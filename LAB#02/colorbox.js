// Color Box Generator - JavaScript

// Initialize browser information on page load
document.addEventListener("DOMContentLoaded", function () {
  displayBrowserInfo();
  window.addEventListener("resize", displayBrowserInfo);
});

/**
 * Display browser and window information using BOM objects
 */
function displayBrowserInfo() {
  const browserDetailsDiv = document.getElementById("browser-details");

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const userAgent = navigator.userAgent;
  const language = navigator.language;
  const platform = navigator.platform;
  const cookieEnabled = navigator.cookieEnabled;
  const onLine = navigator.onLine;

  const browserInfo = `
        <div class="browser-details-item">Window Size: <span>${windowWidth}px × ${windowHeight}px</span></div>
        <div class="browser-details-item">Screen Size: <span>${screenWidth}px × ${screenHeight}px</span></div>
        <div class="browser-details-item">Language: <span>${language}</span></div>
        <div class="browser-details-item">Platform: <span>${platform}</span></div>
        <div class="browser-details-item">Cookies Enabled: <span>${cookieEnabled ? "Yes" : "No"}</span></div>
        <div class="browser-details-item">Online Status: <span>${onLine ? "Online" : "Offline"}</span></div>
    `;

  browserDetailsDiv.innerHTML = browserInfo;
}

/**
 * Add a color box to the container
 * @param {number} colorIndex - The color input index (1, 2, or 3)
 */
function addColorBox(colorIndex) {
  const colorInput = document.getElementById(`color${colorIndex}`);
  const colorValue = colorInput.value;
  const colorBoxesContainer = document.getElementById("color-boxes");

  // Create a new color box div
  const colorBox = document.createElement("div");
  colorBox.className = "color-box";
  colorBox.style.backgroundColor = colorValue;

  // Add color value text inside the box
  const colorValueSpan = document.createElement("div");
  colorValueSpan.className = "color-value";
  colorValueSpan.textContent = colorValue.toUpperCase();
  colorBox.appendChild(colorValueSpan);

  // Add click-to-remove functionality
  colorBox.addEventListener("click", function () {
    colorBox.remove();
    checkEmptyBoxes();
  });

  // Add the box to the container
  colorBoxesContainer.appendChild(colorBox);

  // Remove empty message if it exists
  removeEmptyMessage();
}

/**
 * Clear all color boxes from the container
 */
function clearAllBoxes() {
  const colorBoxesContainer = document.getElementById("color-boxes");
  colorBoxesContainer.innerHTML = "";
  showEmptyMessage();
}

/**
 * Show empty message when no boxes exist
 */
function showEmptyMessage() {
  const colorBoxesContainer = document.getElementById("color-boxes");

  if (colorBoxesContainer.children.length === 0) {
    const emptyMessage = document.createElement("div");
    emptyMessage.className = "empty-message";
    emptyMessage.id = "empty-message";
    emptyMessage.textContent = "No color boxes yet. Add colors to get started!";
    colorBoxesContainer.appendChild(emptyMessage);
  }
}

/**
 * Remove empty message when a box is added
 */
function removeEmptyMessage() {
  const emptyMessage = document.getElementById("empty-message");
  if (emptyMessage) {
    emptyMessage.remove();
  }
}

/**
 * Check if there are no boxes and show empty message if needed
 */
function checkEmptyBoxes() {
  const colorBoxesContainer = document.getElementById("color-boxes");
  const colorBoxes = colorBoxesContainer.querySelectorAll(".color-box");

  if (colorBoxes.length === 0) {
    showEmptyMessage();
  }
}

// Show empty message on initial load
window.addEventListener("load", showEmptyMessage);
