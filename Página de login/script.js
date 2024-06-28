const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    window.location.href = 'http://127.0.0.1:5500/index.html';
});