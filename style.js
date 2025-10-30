// main.js - Inisialisasi tampilan utama
document.addEventListener('DOMContentLoaded', async () => {
    // Memuat data dan menghasilkan rekomendasi
    const allMovies = await DATA.fetchMovies();
    const recommendations = AI.generateRecommendations(allMovies);
    
    // Render ke UI
    UI.renderMovies(recommendations, 'movie-list');

    // Listener tombol "Explore"
    const exploreBtn = document.getElementById('explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("USER_ACTION: Re-running AI engine.");
            const newRecommendations = AI.generateRecommendations(allMovies);
            UI.renderMovies(newRecommendations, 'movie-list');
        });
    }
});
