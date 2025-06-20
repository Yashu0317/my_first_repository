
    function validatePassword(password) {
      // Regular expressions for password validation
      const minLength = 8;  // Minimum length of 8 characters
      const upperCasePattern = /[A-Z]/;  // At least one uppercase letter
      const lowerCasePattern = /[a-z]/;  // At least one lowercase letter
      const numberPattern = /\d/;  // At least one digit
      const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;  // At least one special character
  
      // Check if password meets the requirements
      if (password.length < minLength) {
        return "Password must be at least 8 characters long.";
      }
  
      if (!upperCasePattern.test(password)) {
        return "Password must contain at least one uppercase letter.";
      }
  
      if (!lowerCasePattern.test(password)) {
        return "Password must contain at least one lowercase letter.";
      }
  
      if (!numberPattern.test(password)) {
        return "Password must contain at least one number.";
      }
  
      if (!specialCharPattern.test(password)) {
        return "Password must contain at least one special character.";
      }
  
      // If all conditions are met
      return null;  // Return null if password is valid
    }

    function validateForm() {
      // Clear previous error messages
      document.getElementById('usernameError').innerHTML = '';
      document.getElementById('passwordError').innerHTML = '';
  
      // Get form field values
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
  
      var valid = true;
  
      // Validate username
      if (username === '') {
        document.getElementById('usernameError').innerHTML = 'Username is required.';
        valid = false;
      }
  
      // Validate password using the password validation function
      var passwordValidationMessage = validatePassword(password);
      if (passwordValidationMessage) {
        document.getElementById('passwordError').innerHTML = passwordValidationMessage;
        valid = false;
      }

      // Show the extra checkbox only after successful validation
      if (valid) {
        document.getElementById('extraCheckbox').style.display = 'block';
      }
  
      // If any validation fails, prevent form submission
      return valid;
    }

