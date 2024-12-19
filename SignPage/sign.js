const form = document.getElementById('application-form');
      const inputs = form.querySelectorAll('input');
      const passwordInput = document.getElementById('password');
      const button = form.querySelector('.btn-primary');

      // Load existing data from localStorage, ensure it's an array
      let storedData = JSON.parse(localStorage.getItem('formData'));
      if (!Array.isArray(storedData)) {
        storedData = []; // Initialize an empty array if the data is not an array
      }

      function checkFormValidity() {
        const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
        const passwordValid = passwordInput.value.length >= 10; // Check if the password is at least 10 characters long

        if (allFilled && passwordValid) {
          button.classList.add('enabled');
          button.removeAttribute('disabled');
        } else {
          button.classList.remove('enabled');
          button.setAttribute('disabled', 'true');
        }
      }

      function storeFormData() {
        const formData = {
          firstName: document.getElementById('first-name').value,
          lastName: document.getElementById('last-name').value,
          email: document.getElementById('email').value,
          password: document.getElementById('password').value
        };

        // Append new form data to existing stored data
        storedData.push(formData);
        localStorage.setItem('formData', JSON.stringify(storedData));
        alert('Sign In Successfully');
      }

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (passwordInput.value.length >= 10) {
          storeFormData();
        } else {
          alert('Password must be at least 10 characters long!');
        }
      });

      inputs.forEach(input => {
        input.addEventListener('input', checkFormValidity);
      });