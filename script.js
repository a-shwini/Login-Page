const wrapper = document.querySelector('.wrapper');
const loginLinks = document.querySelectorAll('.login-link');
const registerLink = document.querySelector('.register-link');
const messageBox = document.querySelector('.message-box'); // Use the message-box element
const registrationMessage = document.getElementById('registrationMessage'); // Assuming this is the correct element for registration messages

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    messageBox.style.display = 'none'; // Hide general message box on register click
});

loginLinks.forEach((loginLink) => {
    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
        messageBox.style.display = 'none'; // Hide general message box on login click
    });
});

const loginForm = document.querySelector('.form-box.login form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Login form submitted');

    const email = document.querySelector('.form-box.login input[type="email"]').value;
    const password = document.querySelector('.form-box.login input[type="password"]').value;

    // Different email and password check for demonstration purposes
    if (email === 'user@example.com' && password === 'password123') {
        showMessage('User logged in successfully!', true, messageBox);
    } else {
        showMessage('Invalid email or password. Please try again.', false, messageBox);
    }
});

function showMessage(message, isSuccess = true, targetElement) {
    targetElement.textContent = message;
    targetElement.classList.remove('error', 'success');
    targetElement.classList.add(isSuccess ? 'success' : 'error');
    targetElement.style.display = 'block'; // Show the message box

    setTimeout(() => {
        targetElement.textContent = '';
        targetElement.style.display = 'none'; // Hide the message box after 5 seconds (adjust as needed)
    }, 5000);
}

const registrationForm = document.querySelector('.form-box.register form');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.querySelector('.form-box.register input[type="text"]').value;
    const email = document.querySelector('.form-box.register input[type="email"]').value;
    const password = document.querySelector('.form-box.register input[type="password"]').value;
    const agreeTerms = document.querySelector('.form-box.register input[type="checkbox"]').checked;

    // Dummy check for demonstration purposes
    if (username && email && password && agreeTerms) {
        showMessage('User registered successfully!', true, registrationMessage);
    } else {
        showMessage('Please fill in all the required fields and agree to the terms.', false, registrationMessage);
    }
});