document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    
    // Real-time validation
    form.addEventListener('input', (e) => {
        switch(e.target.id) {
            case 'fullName':
                validateName(e.target.value);
                break;
            case 'email':
                validateEmail(e.target.value);
                break;
            case 'password':
                validatePassword(e.target.value);
                checkPasswordMatch();
                break;
            case 'confirmPassword':
                checkPasswordMatch();
                break;
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const isNameValid = validateName(form.fullName.value);
        const isEmailValid = validateEmail(form.email.value);
        const isPasswordValid = validatePassword(form.password.value);
        const isPasswordMatch = checkPasswordMatch();

        if (isNameValid && isEmailValid && isPasswordValid && isPasswordMatch) {
            // Submit form data (simulated)
            console.log('Form submitted successfully!');
            alert('Registration successful! Redirecting to dashboard...');
            form.reset();
            // window.location.href = '/dashboard'; // Uncomment for actual redirect
        }
    });

    function validateName(name) {
        const error = document.getElementById('nameError');
        if (name.trim().length < 3) {
            error.textContent = 'Name must be at least 3 characters';
            return false;
        }
        error.textContent = '';
        return true;
    }

    function validateEmail(email) {
        const error = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            error.textContent = 'Please enter a valid email address';
            return false;
        }
        error.textContent = '';
        return true;
    }

    function validatePassword(password) {
        const error = document.getElementById('passwordError');
        if (password.length < 8) {
            error.textContent = 'Password must be at least 8 characters';
            return false;
        }
        error.textContent = '';
        return true;
    }

    function checkPasswordMatch() {
        const error = document.getElementById('confirmPasswordError');
        if (passwordInput.value !== confirmPasswordInput.value) {
            error.textContent = 'Passwords do not match';
            return false;
        }
        error.textContent = '';
        return true;
    }
});