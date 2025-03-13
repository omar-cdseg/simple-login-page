document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');
    const registerLink = document.getElementById('registerLink');
    const forgotPasswordLink = document.getElementById('forgotPassword');

    // Handle login form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simple validation
        if (!username || !password) {
            showMessage('Please enter both username and password', 'error');
            return;
        }
        
        // In a real application, you would send this data to a server
        // For demo purposes, we'll just simulate a successful login
        simulateLogin(username, password);
    });

    // Simulate login process
    function simulateLogin(username, password) {
        // Show loading message
        showMessage('Logging in...', '');
        
        // Simulate API call with timeout
        setTimeout(() => {
            // For demo: accept any login with password length > 5
            if (password.length > 5) {
                showMessage('Login successful! Redirecting...', 'success');
                
                // In a real app, you would redirect to dashboard or home page
                // For demo, we'll just reset the form after a delay
                setTimeout(() => {
                    loginForm.reset();
                    messageDiv.textContent = '';
                    messageDiv.className = 'message';
                }, 2000);
            } else {
                showMessage('Invalid username or password', 'error');
            }
        }, 1000);
    }

    // Helper function to show messages
    function showMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.className = 'message';
        if (type) {
            messageDiv.classList.add(type);
        }
    }

    // Handle register link click
    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        showMessage('Registration functionality would be implemented here', '');
    });

    // Handle forgot password link click
    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        showMessage('Password reset functionality would be implemented here', '');
    });
});
