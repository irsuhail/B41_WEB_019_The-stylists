
      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");
      const loginBtn = document.getElementById("loginBtn");

      // Check form completion and enable/disable the login button
      function checkFormCompletion() {
        if (emailInput.value && passwordInput.value) {
          loginBtn.disabled = false;
          loginBtn.classList.add("active");
        } else {
          loginBtn.disabled = true;
          loginBtn.classList.remove("active");
        }
      }

      // Save the user data (email, password) to localStorage
      function storeUserData(email, password) {
        const userData = { email, password };
        localStorage.setItem("userData", JSON.stringify(userData));
      }

      // Login function to validate user data
      function validateLogin(email, password) {
        const storedData = JSON.parse(localStorage.getItem("userData"));

        // If stored data exists, compare the email and password
        if (storedData && storedData.email === email && storedData.password === password) {
          alert("Login successful");
        } else {
          alert("Incorrect email or password");
        }
      }

      // Form submission handler
      document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        // Validate the login credentials
        validateLogin(email, password);
      });

      // Simulate storing user data in localStorage (usually done during registration)
      // For testing purposes, you can call this function to store the test data.
      storeUserData("test@example.com", "password123");

      emailInput.addEventListener("input", checkFormCompletion);
      passwordInput.addEventListener("input", checkFormCompletion);