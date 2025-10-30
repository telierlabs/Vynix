// player.js - Menangani pemutar video
document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get('id');

    if (!movieId) {
        document.getElementById('movie-title').textContent = "ERROR: Missing Stream ID";
        return;
    }

    const allMovies = await DATA.fetchMovies();
    const movie = allMovies.find(m => m.id === movieId);

    if (movie) {
        document.getElementById('movie-title').textContent = movie.title.toUpperCase();
        document.getElementById('movie-description').textContent = movie.description || "AI-generated description: Data point correlation successful.";
        
        // Simulasi skor AI
        const aiScore = (90 + Math.floor(Math.random() * 9)) + '%';
        document.getElementById('ai-rating').textContent = `AI Match: ${aiScore}`;
        
        // Memuat video
        const player = document.getElementById('vynix-player');
        const videoSource = `assets/videos/${movie.video || 'placeholder.mp4'}`;
        
        player.src = videoSource;
        player.load();
        
        console.log(`PLAYER_SYSTEM: Loaded Stream ID ${movieId} from ${videoSource}`);
    } else {
        document.getElementById('movie-title').textContent = "ERROR: Data Not Found";
    }
});
