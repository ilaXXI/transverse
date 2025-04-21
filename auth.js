document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorElement = document.getElementById('loginError');
            
            // Vérification des identifiants
            if (username === 'senior' && password === 'senior123') {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userType', 'senior');
                window.location.href = 'index.html';
            } 
            else if (username === 'benevole' && password === 'benevole123') {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userType', 'benevole');
                window.location.href = 'index.html';
            } 
            else {
                errorElement.textContent = 'Identifiants incorrects';
                errorElement.style.display = 'block';
            }
        });
    }

    // Gestion de l'inscription (redirection simple pour le prototype)
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            window.location.href = 'login.html';
        });
    }
});