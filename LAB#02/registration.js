// Registration Form - JavaScript Validation

// DOM Elements
const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");
const passwordError = document.getElementById("passwordError");

const successMessage = document.getElementById("successMessage");

// Event Listeners
form.addEventListener("submit", handleFormSubmit);

nameInput.addEventListener("blur", validateName);
nameInput.addEventListener("input", validateName);

emailInput.addEventListener("blur", validateEmail);
emailInput.addEventListener("input", validateEmail);

ageInput.addEventListener("blur", validateAge);
ageInput.addEventListener("input", validateAge);

passwordInput.addEventListener("blur", validatePassword);
passwordInput.addEventListener("input", validatePassword);

/**
 * Validate Name Field
 * - Should not be empty
 */
function validateName() {
  const nameValue = nameInput.value.trim();

  if (nameValue === "") {
    setErrorState(nameInput, nameError, "Name is required");
    return false;
  } else if (nameValue.length < 2) {
    setErrorState(nameInput, nameError, "Name must be at least 2 characters");
    return false;
  } else {
    setSuccessState(nameInput, nameError);
    return true;
  }
}

/**
 * Validate Email Field
 * - Must contain @ symbol
 */
function validateEmail() {
  const emailValue = emailInput.value.trim();

  if (emailValue === "") {
    setErrorState(emailInput, emailError, "Email is required");
    return false;
  } else if (!emailValue.includes("@")) {
    setErrorState(emailInput, emailError, "Email must contain @ symbol");
    return false;
  } else if (!isValidEmailFormat(emailValue)) {
    setErrorState(emailInput, emailError, "Please enter a valid email address");
    return false;
  } else {
    setSuccessState(emailInput, emailError);
    return true;
  }
}

/**
 * Validate Age Field
 * - Must be between 18 and 60
 */
function validateAge() {
  const ageValue = ageInput.value.trim();

  if (ageValue === "") {
    setErrorState(ageInput, ageError, "Age is required");
    return false;
  }

  const ageNum = parseInt(ageValue);

  if (isNaN(ageNum)) {
    setErrorState(ageInput, ageError, "Age must be a valid number");
    return false;
  } else if (ageNum < 18) {
    setErrorState(ageInput, ageError, "Age must be at least 18");
    return false;
  } else if (ageNum > 60) {
    setErrorState(ageInput, ageError, "Age must not exceed 60");
    return false;
  } else {
    setSuccessState(ageInput, ageError);
    return true;
  }
}

/**
 * Validate Password Field
 * - Minimum length 6
 */
function validatePassword() {
  const passwordValue = passwordInput.value;

  if (passwordValue === "") {
    setErrorState(passwordInput, passwordError, "Password is required");
    return false;
  } else if (passwordValue.length < 6) {
    setErrorState(
      passwordInput,
      passwordError,
      "Password must be at least 6 characters",
    );
    return false;
  } else {
    setSuccessState(passwordInput, passwordError);
    return true;
  }
}

/**
 * Helper function to validate email format
 */
function isValidEmailFormat(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Set error state for input field
 */
function setErrorState(input, errorElement, message) {
  input.classList.remove("success");
  input.classList.add("error");
  errorElement.textContent = message;
}

/**
 * Set success state for input field
 */
function setSuccessState(input, errorElement) {
  input.classList.remove("error");
  input.classList.add("success");
  errorElement.textContent = "";
}

/**
 * Handle form submission
 */
function handleFormSubmit(event) {
  event.preventDefault();

  // Validate all fields
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isAgeValid = validateAge();
  const isPasswordValid = validatePassword();

  // If all fields are valid
  if (isNameValid && isEmailValid && isAgeValid && isPasswordValid) {
    // Display success message
    displaySuccessMessage();

    // Reset form after 2 seconds
    setTimeout(() => {
      form.reset();
      clearAllStates();
      successMessage.classList.remove("show");
    }, 2000);
  } else {
    // Show error message
    displayErrorMessage();
  }
}

/**
 * Display success message
 */
function displaySuccessMessage() {
  const userName = nameInput.value.trim();
  successMessage.innerHTML = `
        <strong>✓ Registration Successful!</strong><br>
        Welcome, ${userName}! Your account has been created.
    `;
  successMessage.classList.add("show");
}

/**
 * Display error message
 */
function displayErrorMessage() {
  successMessage.innerHTML =
    "<strong>Please fix all errors before submitting.</strong>";
  successMessage.classList.add("show");
  successMessage.style.backgroundColor = "#fff5f5";
  successMessage.style.borderColor = "#ff6b6b";
  successMessage.style.color = "#ff6b6b";

  setTimeout(() => {
    successMessage.style.backgroundColor = "#f1fdf4";
    successMessage.style.borderColor = "#51cf66";
    successMessage.style.color = "#2f9e44";
  }, 3000);
}

/**
 * Clear all input states
 */
function clearAllStates() {
  [nameInput, emailInput, ageInput, passwordInput].forEach((input) => {
    input.classList.remove("success", "error");
  });

  [nameError, emailError, ageError, passwordError].forEach((error) => {
    error.textContent = "";
  });
}

// Clear success message when user starts typing
[nameInput, emailInput, ageInput, passwordInput].forEach((input) => {
  input.addEventListener("focus", () => {
    if (successMessage.classList.contains("show")) {
      successMessage.classList.remove("show");
    }
  });
});
