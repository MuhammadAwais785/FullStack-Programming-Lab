$(document).ready(function () {
  // Gallery data: images and captions
  const galleryData = [
    {
      image: "https://picsum.photos/600/400?random=1",
      caption: "Beautiful Landscape 1",
    },
    {
      image: "https://picsum.photos/600/400?random=2",
      caption: "Scenic Mountain View",
    },
    {
      image: "https://picsum.photos/600/400?random=3",
      caption: "Sunset Over the Ocean",
    },
    {
      image: "https://picsum.photos/600/400?random=4",
      caption: "Tropical Paradise",
    },
    {
      image: "https://picsum.photos/600/400?random=5",
      caption: "Northern Lights",
    },
  ];

  let currentIndex = 0;

  // Cache jQuery elements for better performance
  const $galleryImage = $("#galleryImage");
  const $caption = $("#caption");
  const $counter = $("#counter");
  const $nextBtn = $("#nextBtn");
  const $prevBtn = $("#prevBtn");

  /**
   * Update the gallery display with fade animation
   * Uses method chaining with jQuery
   */
  function updateGallery() {
    // Fade out the current image and caption
    $galleryImage.add($caption).fadeOut(300, function () {
      // Update the image and caption in the DOM
      $galleryImage
        .attr("src", galleryData[currentIndex].image)
        .attr("alt", galleryData[currentIndex].caption);

      $caption.text(galleryData[currentIndex].caption);

      // Fade in the new image and caption
      $galleryImage.add($caption).fadeIn(300);
    });

    // Update counter with method chaining
    $counter
      .fadeOut(200)
      .queue(function (next) {
        $(this).text(`${currentIndex + 1} / ${galleryData.length}`);
        next();
      })
      .fadeIn(200);
  }

  /**
   * Navigate to next image
   */
  function nextImage() {
    currentIndex = (currentIndex + 1) % galleryData.length;
    updateGallery();
  }

  /**
   * Navigate to previous image
   */
  function previousImage() {
    currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    updateGallery();
  }

  // Event handlers using method chaining
  $nextBtn.on("click", nextImage).hover(
    function () {
      $(this).addClass("btn-hover");
    },
    function () {
      $(this).removeClass("btn-hover");
    },
  );

  $prevBtn.on("click", previousImage).hover(
    function () {
      $(this).addClass("btn-hover");
    },
    function () {
      $(this).removeClass("btn-hover");
    },
  );

  // Keyboard navigation
  $(document).on("keydown", function (event) {
    if (event.key === "ArrowRight") {
      nextImage();
    } else if (event.key === "ArrowLeft") {
      previousImage();
    }
  });

  // Initialize gallery on page load
  $galleryImage.fadeIn(500);
  $caption.fadeIn(500);
});
