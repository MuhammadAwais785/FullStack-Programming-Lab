$(document).ready(function () {
  const form = $("#validationForm");
  const successMessage = $("#successMessage");
  const closeSuccessBtn = $("#closeSuccess");

  // Validation rules and patterns
  const validationRules = {
    name: {
      pattern: /^[a-zA-Z\s]{3,}$/,
      message: "Name must be at least 3 characters and contain only letters",
    },
    email: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address",
    },
    phone: {
      pattern: /^[0-9]{10}$/,
      message: "Phone number must be exactly 10 digits",
    },
    password: {
      pattern: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
      message:
        "Password must be at least 8 characters with 1 uppercase letter and 1 number",
    },
    confirmPassword: {
      custom: function (value) {
        return value === $("#password").val();
      },
      message: "Passwords do not match",
    },
    message: {
      custom: function (value) {
        return value.length <= 200;
      },
      message: "Message must not exceed 200 characters",
    },
    terms: {
      custom: function () {
        return $("#terms").is(":checked");
      },
      message: "You must agree to the terms and conditions",
    },
  };

  /**
   * Validate a single field
   * Returns true if valid, false if invalid
   */
  function validateField(fieldName) {
    const field = $(`[name="${fieldName}"]`);
    const value = field.val().trim();
    const rule = validationRules[fieldName];
    const errorElement = $(`#${fieldName}Error`);

    if (!rule) return true;

    let isValid = true;
    let errorMessage = "";

    if (fieldName === "terms") {
      isValid = rule.custom();
      errorMessage = rule.message;
    } else if (rule.custom) {
      isValid = rule.custom(value);
      errorMessage = rule.message;
    } else {
      isValid = rule.pattern.test(value);
      errorMessage = rule.message;
    }

    // Update CSS classes and error messages
    if (isValid) {
      field.removeClass("is-invalid").addClass("is-valid");
      errorElement.text("").fadeOut(200);
    } else {
      field.removeClass("is-valid").addClass("is-invalid");
      errorElement.text(errorMessage).fadeIn(200);
    }

    return isValid;
  }

  /**
   * Validate all fields in the form
   */
  function validateForm() {
    const fieldsToValidate = [
      "fullName",
      "email",
      "phone",
      "password",
      "confirmPassword",
      "message",
      "terms",
    ];
    let allValid = true;

    fieldsToValidate.forEach((fieldName) => {
      if (!validateField(fieldName)) {
        allValid = false;
      }
    });

    return allValid;
  }

  /**
   * Blur event handler - validates field when user leaves it
   */
  $(".form-control, #terms").on("blur", function () {
    const fieldName = $(this).attr("name");
    validateField(fieldName);
  });

  /**
   * Real-time validation for confirm password
   */
  $("#password").on("keyup", function () {
    if (
      $("#confirmPassword").hasClass("is-valid") ||
      $("#confirmPassword").hasClass("is-invalid")
    ) {
      validateField("confirmPassword");
    }
  });

  /**
   * Real-time validation for message character count
   */
  $("#message").on("keyup", function () {
    if ($(this).hasClass("is-valid") || $(this).hasClass("is-invalid")) {
      validateField("message");
    }
  });

  /**
   * Form submission handler
   */
  form.on("submit", function (event) {
    event.preventDefault();

    // Validate all fields
    if (validateForm()) {
      // Get the submitted email
      const email = $("#email").val();

      // Update success message with email
      $("#submittedEmail").text(`Email: ${email}`);

      // Show success message with fade animation
      successMessage.removeClass("hidden").fadeIn(400).css("display", "flex");

      // Reset form after submission
      form[0].reset();

      // Remove validation classes
      $(".form-control, #terms").removeClass("is-valid is-invalid");

      // Hide error messages
      $(".error-message").fadeOut(200).text("");
    } else {
      // Shake animation on error
      form.addClass("shake");
      setTimeout(() => {
        form.removeClass("shake");
      }, 500);
    }
  });

  /**
   * Close success message
   */
  closeSuccessBtn.on("click", function () {
    successMessage.fadeOut(300, function () {
      $(this).addClass("hidden");
    });
  });

  /**
   * Close success message when clicking outside
   */
  $(document).on("click", function (event) {
    if (
      successMessage.is(":visible") &&
      !successMessage.find(".success-content").is(event.target) &&
      !successMessage.find(".success-content").has(event.target).length
    ) {
      closeSuccessBtn.click();
    }
  });

  /**
   * Reset form handler
   */
  form.on("reset", function () {
    // Clear validation classes and error messages
    $(".form-control, #terms").removeClass("is-valid is-invalid");
    $(".error-message").text("").fadeOut(200);
    successMessage.fadeOut(200).addClass("hidden");
  });
});
