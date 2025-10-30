// auth.js - Logika Login/Auth
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const message = document.getElementById('login-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulasi Autentikasi untuk Pitch
        if (username === 'investor' && password === 'vynix2025') {
            message.textContent = "ACCESS GRANTED. Redirecting to AI Dashboard...";
            message.style.color = "var(--color-accent)";
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        } else {
            message.textContent = "ACCESS DENIED. Invalid Credentials. Contact System Admin.";
            message.style.color = "white"; // Biar kontras dengan hijau accent
        }
    });
});
