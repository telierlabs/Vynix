// subs.js - Logika Subscription
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.subscribe-btn');
    const message = document.getElementById('subs-message');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const tier = e.target.getAttribute('data-tier');
            console.log(`SUBS_ACTION: Selected Tier: ${tier.toUpperCase()}`);
            
            // Logika simulasi pendaftaran berhasil
            message.innerHTML = `SUBSCRIPTION ACTIVATED: **${tier.toUpperCase()} TIER**. Redirecting...`;
            message.style.color = "var(--color-accent)";
            
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1500);
        });
    });
});
