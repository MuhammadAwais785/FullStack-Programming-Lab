$(document).ready(function () {
  // ===== STATE & CONFIGURATION =====
  let draggedElement = null;
  let draggedIndex = null;
  const $sortableList = $("#sortableList");
  const $addItemBtn = $("#addItemBtn");
  const $resetBtn = $("#resetBtn");
  const $exportBtn = $("#exportBtn");
  const $dragInfo = $("#dragInfo");
  const $successMessage = $("#successMessage");

  /**
   * Make an item draggable and add event handlers
   */
  function makeItemDraggable($item) {
    // Drag start event
    $item.on("dragstart", function (e) {
      draggedElement = this;
      draggedIndex = $sortableList.find(".list-item").index(this);

      // Add visual feedback
      $(this).addClass("dragging");
      $dragInfo.removeClass("hidden").fadeIn(200);
      $("#dragText").text(`Dragging: "${$(this).find(".item-text").val()}"`);
      updateDragStatus("Dragging...");

      // Set drag effect
      e.originalEvent.dataTransfer.effectAllowed = "move";
      e.originalEvent.dataTransfer.setData("text/html", $(this).html());
    });

    // Drag end event
    $item.on("dragend", function (e) {
      // Remove visual feedback from all items
      $sortableList.find(".list-item").removeClass("dragging drag-over");
      $dragInfo.fadeOut(200, function () {
        $(this).addClass("hidden");
      });
      updateDragStatus("Ready");
    });

    // Drag enter event
    $item.on("dragenter", function (e) {
      if (draggedElement && draggedElement !== this) {
        $(this).addClass("drag-over");
      }
    });

    // Drag leave event
    $item.on("dragleave", function (e) {
      $(this).removeClass("drag-over");
    });

    // Drag over event (required for drop to work)
    $item.on("dragover", function (e) {
      e.preventDefault();
      e.originalEvent.dataTransfer.dropEffect = "move";
      return false;
    });

    // Drop event
    $item.on("drop", function (e) {
      e.preventDefault();
      e.stopPropagation();

      if (draggedElement && draggedElement !== this) {
        // Swap items
        const $drops = $sortableList.find(".list-item");
        const dropIndex = $drops.index(this);
        const $draggedItem = $(draggedElement);

        // Use jQuery DOM manipulation to reorder
        if (draggedIndex < dropIndex) {
          $draggedItem.insertAfter($(this));
        } else {
          $draggedItem.insertBefore($(this));
        }

        // Update the list
        updateItemNumbers();
        updateOrderPreview();
        showSuccessMessage("Items reordered successfully!");
      }

      $(this).removeClass("drag-over");
      return false;
    });

    // Delete button handler
    $item.find(".btn-delete").on("click", function (e) {
      e.stopPropagation();
      $item.fadeOut(300, function () {
        $(this).remove();
        updateItemNumbers();
        updateOrderPreview();
        updateStats();
        showSuccessMessage("Item deleted!");
      });
    });
  }

  /**
   * Update item numbers after reordering
   */
  function updateItemNumbers() {
    $sortableList.find(".list-item").each(function (index) {
      $(this)
        .find(".item-number")
        .text(index + 1);

      // Update last updated time
      updateLastUpdated();
    });
  }

  /**
   * Update the order preview list
   */
  function updateOrderPreview() {
    const orderHTML = $sortableList
      .find(".list-item")
      .map(function () {
        const text = $(this).find(".item-text").val();
        const priority = $(this).find(".item-priority").text();
        return `<div class="order-item"><span class="order-text">${text}</span><span class="order-priority">${priority}</span></div>`;
      })
      .get()
      .join("");

    $("#orderList").html(orderHTML);
  }

  /**
   * Update status information
   */
  function updateStats() {
    const count = $sortableList.find(".list-item").length;
    $("#totalItems").text(count);
  }

  /**
   * Update last updated timestamp
   */
  function updateLastUpdated() {
    const now = new Date();
    const timeString = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    $("#lastUpdated").text(timeString);
  }

  /**
   * Update drag status display
   */
  function updateDragStatus(status) {
    $("#dragStatus").text(status);
  }

  /**
   * Show success message with animation
   */
  function showSuccessMessage(message) {
    $("#successText").text(message);
    $successMessage.removeClass("hidden").fadeIn(200);

    setTimeout(() => {
      $successMessage.fadeOut(200, function () {
        $(this).addClass("hidden");
      });
    }, 2000);
  }

  /**
   * Add new item to the list
   */
  $addItemBtn.on("click", function () {
    const itemCount = $sortableList.find(".list-item").length + 1;
    const priorityOptions = [
      "priority-high",
      "priority-medium",
      "priority-low",
    ];
    const randomPriority =
      priorityOptions[Math.floor(Math.random() * priorityOptions.length)];
    const priorityText = randomPriority.replace("priority-", "").toUpperCase();

    const newItem = $(`
            <div class="list-item" draggable="true">
                <span class="drag-handle">⋮⋮</span>
                <span class="item-number">${itemCount}</span>
                <input type="text" class="item-text" value="New Task ${itemCount}" readonly>
                <span class="item-priority ${randomPriority}">${priorityText}</span>
                <button class="btn-delete">✕</button>
            </div>
        `);

    // Add animation and make draggable
    newItem
      .hide()
      .appendTo($sortableList)
      .slideDown(300, function () {
        makeItemDraggable(newItem);
      });

    updateStats();
    updateOrderPreview();
    showSuccessMessage("New item added!");
  });

  /**
   * Reset order to original
   */
  $resetBtn.on("click", function () {
    if (confirm("Reset list to original order?")) {
      const $items = $sortableList.find(".list-item");
      const defaultTexts = [
        "Learn jQuery Basics",
        "Master DOM Manipulation",
        "Practice Event Handling",
        "CSS Animations & Effects",
        "Build Real Projects",
        "Master AJAX Requests",
        "Optimize Performance",
        "Deploy Your Application",
      ];

      $items.each(function (index) {
        if (index < defaultTexts.length) {
          $(this).find(".item-text").val(defaultTexts[index]);
        }
      });

      updateItemNumbers();
      updateOrderPreview();
      showSuccessMessage("Order reset to original!");
    }
  });

  /**
   * Export list as text
   */
  $exportBtn.on("click", function () {
    const listData = [];
    $sortableList.find(".list-item").each(function (index) {
      const text = $(this).find(".item-text").val();
      const priority = $(this).find(".item-priority").text();
      listData.push(`${index + 1}. ${text} [${priority}]`);
    });

    const exportText =
      "Sortable List Export:\n" + "=".repeat(50) + "\n" + listData.join("\n");

    // Copy to clipboard
    const $textarea = $("<textarea>");
    $textarea.val(exportText);
    $("body").append($textarea);
    $textarea.select();

    try {
      document.execCommand("copy");
      showSuccessMessage("List copied to clipboard!");
    } catch (err) {
      alert("Failed to copy to clipboard");
    }

    $textarea.remove();
  });

  /**
   * Initialize drag and drop for existing items
   */
  function initializeDragAndDrop() {
    $sortableList.find(".list-item").each(function () {
      makeItemDraggable($(this));
    });

    // Initial preview update
    updateOrderPreview();
    updateStats();
  }

  /**
   * Handle keyboard shortcuts
   */
  $(document).on("keydown", function (e) {
    // Alt+A to add new item
    if (e.altKey && e.key.toLowerCase() === "a") {
      e.preventDefault();
      $addItemBtn.click();
    }
    // Alt+R to reset
    if (e.altKey && e.key.toLowerCase() === "r") {
      e.preventDefault();
      $resetBtn.click();
    }
  });

  /**
   * Prevent default drag behavior on document
   */
  $(document).on("dragover drop", function (e) {
    e.preventDefault();
    e.stopPropagation();
  });

  // Initialize on page load
  initializeDragAndDrop();
});
