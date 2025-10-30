// ui.js - Menangani manipulasi DOM (UI)
const UI = {
    renderMovies: (movies, containerId) => {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = ''; 

        movies.forEach(movie => {
            const item = document.createElement('div');
            item.className = 'ai-grid-item';
            item.innerHTML = `
                <img src="assets/posters/${movie.poster || 'default.jpg'}" alt="${movie.title}" style="width:100%;">
                <h3>${movie.title}</h3>
                <p style="color: var(--color-accent);">Match: ${movie.matchScore || 'N/A'}</p>
                <a href="player.html?id=${movie.id}" class="btn" style="margin-top: 10px; display: block;">Watch_Stream</a>
            `;
            container.appendChild(item);
        });
    },

    // Bisa ditambahkan fungsi lain seperti show/hide loading spinner
    showLoading: (message) => {
        // ... (Implementasi UI loading)
    }
};
