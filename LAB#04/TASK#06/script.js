$(document).ready(function () {
  // ===== CONFIGURATION =====
  const API_BASE_URL = "https://jsonplaceholder.typicode.com";
  const POSTS_PER_PAGE = 10;

  // State management
  const state = {
    allPosts: [],
    filteredPosts: [],
    currentPage: 1,
    displayedCount: 0,
    isLoading: false,
    hasMoreData: true,
    users: [],
  };

  // Cache jQuery elements
  const $postsList = $("#postsList");
  const $loadMoreBtn = $("#loadMoreBtn");
  const $loadingIndicator = $("#loadingIndicator");
  const $errorMessage = $("#errorMessage");
  const $emptyState = $("#emptyState");
  const $endMessage = $("#endMessage");
  const $searchInput = $("#searchInput");
  const $userFilter = $("#userFilter");
  const $refreshBtn = $("#refreshBtn");
  const $postsLoaded = $("#postsLoaded");
  const $totalPosts = $("#totalPosts");
  const $apiStatus = $("#apiStatus");

  /**
   * Show loading indicator
   */
  function showLoading() {
    state.isLoading = true;
    $loadingIndicator.removeClass("hidden").fadeIn(200);
    updateAPIStatus("Loading...");
  }

  /**
   * Hide loading indicator
   */
  function hideLoading() {
    state.isLoading = false;
    $loadingIndicator.fadeOut(200, function () {
      $(this).addClass("hidden");
    });
  }

  /**
   * Show error message
   */
  function showError(message) {
    $errorMessage.removeClass("hidden").fadeIn(200);

    $("#errorText").text(message);
    updateAPIStatus("Error", true);
  }

  /**
   * Hide error message
   */
  function hideError() {
    $errorMessage.fadeOut(200, function () {
      $(this).addClass("hidden");
    });
  }

  /**
   * Close error message
   */
  $("#closeError").on("click", hideError);

  /**
   * Update API status display
   */
  function updateAPIStatus(status, isError = false) {
    $apiStatus
      .text(status)
      .removeClass("error")
      .removeClass("success")
      .addClass(isError ? "error" : "success");
  }

  /**
   * Fetch posts from API using jQuery AJAX
   */
  function fetchPosts(page = 1) {
    if (state.isLoading) return;
    if (!state.hasMoreData) return;

    showLoading();

    // Use jQuery AJAX to fetch data
    $.ajax({
      url: `${API_BASE_URL}/posts`,
      type: "GET",
      dataType: "json",
      timeout: 10000,
      success: function (data) {
        // Add new posts to our collection
        state.allPosts = data;
        state.filteredPosts = data;
        state.hasMoreData = data.length > 0;

        // Update total posts count
        $totalPosts.text(data.length);

        // Render posts
        renderPosts();
        hideLoading();
        updateAPIStatus("Connected");
        hideError();
      },
      error: function (xhr, status, error) {
        hideLoading();
        let errorMsg = "Failed to fetch posts";

        if (status === "timeout") {
          errorMsg = "Request timeout - API took too long to respond";
        } else if (xhr.status === 0) {
          errorMsg = "Network error - Check your internet connection";
        } else if (xhr.status === 404) {
          errorMsg = "API endpoint not found";
        } else if (xhr.status >= 500) {
          errorMsg = "Server error - API is temporarily unavailable";
        }

        showError(errorMsg);
      },
    });
  }

  /**
   * Fetch users for filter dropdown
   */
  function fetchUsers() {
    $.ajax({
      url: `${API_BASE_URL}/users`,
      type: "GET",
      dataType: "json",
      success: function (users) {
        state.users = users;
        populateUserFilter(users);
      },
    });
  }

  /**
   * Populate user filter dropdown
   */
  function populateUserFilter(users) {
    const options = users
      .map((user) => `<option value="${user.id}">${user.name}</option>`)
      .join("");

    $userFilter.html('<option value="">All Users</option>' + options);
  }

  /**
   * Render posts from filtered list
   * Uses DOM Manipulation to build HTML
   */
  function renderPosts() {
    const startIndex = 0;
    const endIndex = state.currentPage * POSTS_PER_PAGE;
    const postsToDisplay = state.filteredPosts.slice(startIndex, endIndex);

    state.displayedCount = postsToDisplay.length;

    // Clear previous posts
    $postsList.empty();

    if (postsToDisplay.length === 0) {
      $emptyState.removeClass("hidden").fadeIn(200);
      $postsList.hide();
      $loadMoreBtn.hide();
      $endMessage.addClass("hidden");
      return;
    }

    // Hide empty state
    $emptyState.addClass("hidden").fadeOut(200);
    $postsList.show();
    $loadMoreBtn.show();

    // Build HTML for each post using DOM Manipulation
    postsToDisplay.forEach((post, index) => {
      const postHTML = `
                <div class="post-item" style="animation-delay: ${index * 50}ms;">
                    <div class="post-header">
                        <h3 class="post-title">${escapeHtml(post.title)}</h3>
                        <span class="post-id">ID: ${post.id}</span>
                    </div>
                    <p class="post-body">${escapeHtml(post.body)}</p>
                    <div class="post-footer">
                        <span class="post-user">👤 User ID: ${post.userId}</span>
                        <span class="post-comments">💬 Comments: <span class="comments-count">${post.id}</span></span>
                    </div>
                </div>
            `;

      // Use jQuery to create and append element with animation
      $(postHTML).appendTo($postsList).hide().fadeIn(300);
    });

    // Update stats
    $postsLoaded.text(state.displayedCount);

    // Check if we can load more
    if (state.displayedCount >= state.filteredPosts.length) {
      $loadMoreBtn.hide();
      $endMessage.removeClass("hidden").fadeIn(200);
    } else {
      $loadMoreBtn.show();
      $endMessage.addClass("hidden");
    }
  }

  /**
   * Load more posts (pagination)
   */
  $loadMoreBtn.on("click", function () {
    if (state.isLoading) return;

    state.currentPage++;
    renderPosts();

    // Smooth scroll to new posts
    $("html, body").animate(
      {
        scrollTop: $postsList.offset().top - 100,
      },
      600,
    );
  });

  /**
   * Search functionality
   */
  $searchInput.on("keyup", function () {
    const searchTerm = $(this).val().toLowerCase();

    // Filter posts based on search term
    state.filteredPosts = state.allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.body.toLowerCase().includes(searchTerm),
    );

    state.currentPage = 1;
    state.displayedCount = 0;
    renderPosts();
  });

  /**
   * Filter by user
   */
  $userFilter.on("change", function () {
    const userId = $(this).val();

    if (userId === "") {
      state.filteredPosts = state.allPosts;
    } else {
      state.filteredPosts = state.allPosts.filter(
        (post) => post.userId == userId,
      );
    }

    state.currentPage = 1;
    state.displayedCount = 0;
    renderPosts();
  });

  /**
   * Refresh data and reload from API
   */
  $refreshBtn.on("click", function () {
    // Add rotation animation
    $(this).addClass("spinning");

    state.currentPage = 1;
    state.displayedCount = 0;
    state.allPosts = [];
    state.filteredPosts = [];
    $postsList.empty();
    $searchInput.val("");
    $userFilter.val("");

    fetchPosts();

    // Remove spinning class after animation
    setTimeout(() => {
      $refreshBtn.removeClass("spinning");
    }, 600);
  });

  /**
   * Escape HTML to prevent XSS attacks
   */
  function escapeHtml(text) {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
  }

  /**
   * Infinite scroll on window scroll
   * Auto-load more posts when user scrolls near bottom
   */
  let scrollTimeout;
  $(window).on("scroll", function () {
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(function () {
      if (state.isLoading) return;

      // Calculate distance from bottom
      const distanceFromBottom =
        $(document).height() - $(window).scrollTop() - $(window).height();

      // Load more if user is within 500px of bottom
      if (
        distanceFromBottom < 500 &&
        state.hasMoreData &&
        state.displayedCount < state.filteredPosts.length &&
        $loadMoreBtn.is(":visible")
      ) {
        $loadMoreBtn.click();
      }
    }, 100);
  });

  /**
   * Format timestamp (if needed for future enhancement)
   */
  function formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  // Initialize on page load
  fetchUsers();
  fetchPosts();
});
