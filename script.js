const registrationForm = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  let isValid = true;

  // Username Validation
  if (username.length < 6 || username.length > 20) {
    isValid = false;
    usernameError.textContent = 'Username must be between 6 and 20 characters.';
  } else {
    usernameError.textContent = '';
  }

  // Email Validation (Improved Regex)
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    isValid = false;
    emailError.textContent = 'Invalid email format. Please use a valid email address.';
  } else {
    // Clear the error message if the email is valid
    emailError.textContent = '';
  } // Added closing curly brace

  // ... rest of your code for password validation, confirmation, etc.
});
