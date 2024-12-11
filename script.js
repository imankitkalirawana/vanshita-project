// Get the form, inputs, and success message element
const form = document.getElementById('contact-form');
const inputs = form.querySelectorAll('input, textarea');
const successMessage = document.getElementById('success-message');
const doneButton = document.getElementById('done-button');

// Function to clear previous validation styles
const clearValidationStyles = () => {
    inputs.forEach(input => {
        input.style.border = '';
        input.setAttribute('aria-invalid', 'false');
    });
};

// Validate email format
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Handle form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;
    let firstError = false;
    clearValidationStyles();

    // Check for each input field
    inputs.forEach(input => {
        // Skip validation for the last-name field
        if (input.id === 'last-name') return;

        if (firstError) return;

        if (input.value.trim() === '') {
            // If input is empty, mark as invalid
            input.style.border = '2px solid red';
            input.setAttribute('aria-invalid', 'true');
            isValid = false;
            alert(`${input.name} is required`);
            firstError = true;
        } else if (input.id === 'email' && !isValidEmail(input.value)) {
            // Email validation if not empty
            input.style.border = '2px solid red';
            input.setAttribute('aria-invalid', 'true');
            isValid = false;
            alert('Email is invalid');
            firstError = true;
        }
    });

    // If all inputs are valid, show success message
    if (isValid) {
        successMessage.style.display = 'flex';
        form.reset();
    }
});

doneButton.addEventListener('click', function () {
    successMessage.style.display = 'none';  // Hide modal
});