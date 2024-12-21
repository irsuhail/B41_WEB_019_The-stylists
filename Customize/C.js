const form = document.getElementById('demoForm');
    const submitButton = document.querySelector('.btn-submit');
    const inputs = form.querySelectorAll('input, select');
    
    // Check if all required fields are filled
    function validateForm() {
      let isValid = true;

      inputs.forEach(input => {
        const label = input.previousElementSibling;

        if (input.type === "checkbox") return; // Skip checkbox
        if (input.value.trim() === "") {
          input.classList.remove('filled');
          label.classList.remove('filled');
        } else {
          input.classList.add('filled');
          label.classList.add('filled');
        }

        if (input.required && input.value.trim() === "") {
          isValid = false;
        }
      });

      if (isValid) {
        submitButton.classList.add('active');
        submitButton.disabled = false;
      } else {
        submitButton.classList.remove('active');
        submitButton.disabled = true;
      }
    }

    // Attach event listeners to each input for focus and input events
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.style.borderColor = '#5266eb';
        const label = input.previousElementSibling;
        label.style.color = '#5266eb';
      });

      input.addEventListener('blur', () => {
        if (input.value.trim() === "") {
          input.style.borderColor = '#ccc';
          const label = input.previousElementSibling;
          label.style.color = '#444';
        }
      });

      input.addEventListener('input', validateForm);
    });

    // On form submit, save the data to localStorage
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        industry: document.getElementById('industry').value,
        balance: document.getElementById('balance').value,
        emails: document.getElementById('emails').checked
      };

      // Save to localStorage
      localStorage.setItem('demoFormData', JSON.stringify(formData));

      // Optionally, redirect to a homepage
      window.location.href = 'homepage.html';
    });

    // Initial validation to check if form is valid on page load
    validateForm();