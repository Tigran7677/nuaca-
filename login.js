// Get references to the modal, button, and close button
const loginButton = document.getElementById('loginButton');
const loginModal = document.getElementById('loginModal');
const closeButton = document.querySelector('.close-button');

// Open the modal when the login button is clicked
loginButton.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Close the modal when the close button is clicked
closeButton.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Close the modal when clicking outside the modal
window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// Handle form submission
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Add your login logic here (e.g., validate credentials)
    console.log('Username:', username);
    console.log('Password:', password);

    // Close the modal after login
    loginModal.style.display = 'none';

    // Clear the form fields
    loginForm.reset();
});