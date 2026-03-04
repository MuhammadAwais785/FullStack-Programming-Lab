$(document).ready(function () {
  // Cache jQuery objects for better performance
  const $itemInput = $("#itemInput");
  const $addBtn = $("#addBtn");
  const $itemList = $("#itemList");
  const $emptyMessage = $("#emptyMessage");

  // Initialize - Check if list is empty on page load
  updateEmptyMessage();

  // Event Handlers using jQuery
  $addBtn.on("click", addItem);

  // Handle Enter key press
  $itemInput.on("keypress", function (event) {
    if (event.key === "Enter") {
      addItem();
    }
  });

  /**
   * Add a new item to the list
   */
  function addItem() {
    const itemText = $itemInput.val().trim();

    // Validation: Check if input is not empty
    if (itemText === "") {
      alert("Please enter an item!");
      $itemInput.focus();
      return;
    }

    // Create HTML structure for the new item
    const $listItem = $("<li>").addClass("list-item").html(`
                <span class="item-text">${itemText}</span>
                <button class="delete-btn">Delete</button>
            `);

    // Add click event to delete button
    $listItem.find(".delete-btn").on("click", function () {
      deleteItem($listItem);
    });

    // Append to list using jQuery
    $itemList.append($listItem);

    // Clear input field and focus for next entry
    $itemInput.val("").focus();

    // Update empty message
    updateEmptyMessage();
  }

  /**
   * Delete an item from the list
   * @param {jQuery} $listItem - The jQuery list item to delete
   */
  function deleteItem($listItem) {
    // Add fade-out animation before removing
    $listItem.animate(
      {
        opacity: 0,
      },
      300,
      function () {
        $listItem.slideUp(200, function () {
          $listItem.remove();
          updateEmptyMessage();
        });
      },
    );
  }

  /**
   * Update the empty message visibility
   */
  function updateEmptyMessage() {
    if ($itemList.children().length === 0) {
      $emptyMessage.addClass("show");
    } else {
      $emptyMessage.removeClass("show");
    }
  }
});
