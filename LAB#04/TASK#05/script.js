$(document).ready(function () {
  // Track current styles
  const currentStyles = {
    fontSize: "20px",
    color: "#333333",
    backgroundColor: "#ffffff",
    bold: false,
    italic: false,
    underline: false,
    shadow: false,
    glow: false,
  };

  /**
   * Update the style information display
   * Uses DOM Manipulation to update info text
   */
  function updateStyleInfo() {
    // Build effects string
    const effects = [];
    if (currentStyles.bold) effects.push("Bold");
    if (currentStyles.italic) effects.push("Italic");
    if (currentStyles.underline) effects.push("Underline");
    if (currentStyles.shadow) effects.push("Text Shadow");
    if (currentStyles.glow) effects.push("Glow");

    // Update info display using chaining
    $("#sizeInfo").text(currentStyles.fontSize);
    $("#colorInfo").text(currentStyles.color);
    $("#bgInfo").text(currentStyles.backgroundColor);
    $("#effectsInfo").text(effects.length > 0 ? effects.join(", ") : "None");
  }

  /**
   * Apply font size with chaining
   * Demonstrates CSS manipulation and animation
   */
  $(".btn-size").on("click", function () {
    const size = $(this).data("size");

    // jQuery chaining: multiple methods in sequence
    $(".btn-size").removeClass("active");
    $(this).addClass("active");

    // Apply size with fade animation
    $("#textBlock")
      .fadeOut(200)
      .css("fontSize", size + "px")
      .fadeIn(300);

    // Update tracking
    currentStyles.fontSize = size + "px";
    updateStyleInfo();
  });

  /**
   * Apply text color with chaining
   */
  $(".btn-color").on("click", function () {
    const color = $(this).data("color");

    // Remove active from all color buttons and add to clicked
    $(".btn-color").removeClass("active");
    $(this).addClass("active");

    // Chain multiple operations: fadeOut -> change style -> fadeIn
    $("#textBlock").fadeOut(150).css("color", color).fadeIn(250);

    currentStyles.color = color;
    updateStyleInfo();
  });

  /**
   * Apply background color with chaining
   */
  $(".btn-bg").on("click", function () {
    const bg = $(this).data("bg");

    // Remove active from all bg buttons and add to clicked
    $(".btn-bg").removeClass("active");
    $(this).addClass("active");

    // Apply background with smooth transition
    $("#textBlock").fadeOut(150).css("backgroundColor", bg).fadeIn(250);

    currentStyles.backgroundColor = bg;
    updateStyleInfo();
  });

  /**
   * Toggle text styles (bold, italic, underline)
   * Demonstrates chaining with class manipulation
   */
  $(".btn-toggle").on("click", function () {
    const style = $(this).data("style");
    const effect = $(this).data("effect");

    // Toggle button active state
    $(this).toggleClass("active");

    if (style) {
      // Toggle style tracking
      currentStyles[style] = !currentStyles[style];

      // Apply style using chaining
      if (currentStyles[style]) {
        // Multiple style changes chained together
        $("#textBlock")
          .css({
            fontWeight: currentStyles.bold ? "bold" : "normal",
            fontStyle: currentStyles.italic ? "italic" : "normal",
            textDecoration: currentStyles.underline ? "underline" : "none",
          })
          .fadeIn(200);
      } else {
        $("#textBlock")
          .css({
            fontWeight: currentStyles.bold ? "bold" : "normal",
            fontStyle: currentStyles.italic ? "italic" : "normal",
            textDecoration: currentStyles.underline ? "underline" : "none",
          })
          .fadeIn(200);
      }
    } else if (effect) {
      // Toggle effect tracking
      currentStyles[effect] = !currentStyles[effect];

      // Apply effect using chaining
      applyEffects();
    }

    updateStyleInfo();
  });

  /**
   * Apply visual effects (shadow, glow)
   * Uses CSS manipulation with chaining
   */
  function applyEffects() {
    let textShadow = "none";
    let boxShadow = "none";

    if (currentStyles.shadow) {
      textShadow = "2px 2px 4px rgba(0, 0, 0, 0.3)";
    }

    if (currentStyles.glow) {
      // Determine glow color based on text color
      boxShadow = `0 0 15px ${currentStyles.color}`;
      textShadow = `0 0 10px ${currentStyles.color}`;
    }

    // Chain multiple CSS operations
    $("#textBlock")
      .css({
        textShadow: textShadow,
        boxShadow: boxShadow,
      })
      .fadeIn(200);
  }

  /**
   * Apply preset style using extended chaining
   * Demonstrates powerful chaining capabilities
   */
  $("#presetBtn").on("click", function () {
    // Show animation on button
    $(this).animate({ opacity: 0.7 }, 100).animate({ opacity: 1 }, 100);

    // Chain multiple CSS operations and animations
    // This is a great example of jQuery's power
    $("#textBlock")
      .fadeOut(200)
      .css({
        fontSize: "24px",
        color: "#e74c3c",
        backgroundColor: "#fff9e6",
        fontWeight: "bold",
        fontStyle: "italic",
        textDecoration: "underline",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        boxShadow: "0 0 15px rgba(231, 76, 60, 0.3)",
        padding: "20px",
        borderRadius: "8px",
        transition: "all 0.3s ease",
      })
      .fadeIn(300);

    // Update all tracking variables
    currentStyles.fontSize = "24px";
    currentStyles.color = "#e74c3c";
    currentStyles.backgroundColor = "#fff9e6";
    currentStyles.bold = true;
    currentStyles.italic = true;
    currentStyles.underline = true;
    currentStyles.shadow = true;

    // Update button states using chaining
    $(".btn-size[data-size='24']").addClass("active");
    $(".btn-size").not("[data-size='24']").removeClass("active");

    $(".btn-color[data-color='#e74c3c']").addClass("active");
    $(".btn-color").not("[data-color='#e74c3c']").removeClass("active");

    $(".btn-bg[data-bg='#fff9e6']").addClass("active");
    $(".btn-bg").not("[data-bg='#fff9e6']").removeClass("active");

    $("#boldBtn, #italicBtn, #underlineBtn, #shadowBtn").addClass("active");
    $("#glowBtn").removeClass("active");
    currentStyles.glow = false;

    updateStyleInfo();
  });

  /**
   * Reset all styles to default
   * Uses chaining to reset everything at once
   */
  $("#resetBtn").on("click", function () {
    // Animate button
    $(this).animate({ scale: 1.1 }, 100).animate({ scale: 1 }, 100);

    // Chain reset operations
    $("#textBlock")
      .fadeOut(200)
      .css({
        fontSize: "20px",
        color: "#333333",
        backgroundColor: "#ffffff",
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
        textShadow: "none",
        boxShadow: "none",
        padding: "0",
        borderRadius: "0",
      })
      .fadeIn(300);

    // Reset all tracking variables
    currentStyles.fontSize = "20px";
    currentStyles.color = "#333333";
    currentStyles.backgroundColor = "#ffffff";
    currentStyles.bold = false;
    currentStyles.italic = false;
    currentStyles.underline = false;
    currentStyles.shadow = false;
    currentStyles.glow = false;

    // Reset all button states using chaining
    $(".btn-size, .btn-color, .btn-bg, .btn-toggle").removeClass("active");
    $(".btn-size[data-size='20']").addClass("active");
    $(".btn-color[data-color='#333333']").addClass("active");
    $(".btn-bg[data-bg='#ffffff']").addClass("active");

    updateStyleInfo();
  });

  /**
   * Keyboard support for quick styling
   */
  $(document).on("keydown", function (event) {
    if (event.altKey) {
      switch (event.key.toLowerCase()) {
        case "b":
          event.preventDefault();
          $("#boldBtn").click();
          break;
        case "i":
          event.preventDefault();
          $("#italicBtn").click();
          break;
        case "u":
          event.preventDefault();
          $("#underlineBtn").click();
          break;
      }
    }
  });

  /**
   * Hover effects on text block for visual feedback
   */
  $("#textBlock")
    .on("mouseenter", function () {
      $(this).stop().animate(
        {
          opacity: 0.95,
          transform: "scale(1.02)",
        },
        150,
      );
    })
    .on("mouseleave", function () {
      $(this).stop().animate(
        {
          opacity: 1,
          transform: "scale(1)",
        },
        150,
      );
    });

  // Initialize info on page load
  updateStyleInfo();
});
