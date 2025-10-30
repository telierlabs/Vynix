// search.js - Logika Pencarian AI
const SEARCH = {
    // Fungsi simulasi pencarian real-time
    runAISearch: (query, allMovies) => {
        console.log(`AI_SEARCH: Processing query: "${query}"`);
        
        const results = allMovies.filter(movie => 
            movie.title.toLowerCase().includes(query.toLowerCase())
        );

        // Simulasi penambahan skor relevansi AI
        return results.map(movie => ({
            ...movie,
            relevanceScore: Math.floor(Math.random() * 100),
        })).sort((a, b) => b.relevanceScore - a.relevanceScore); // Sort by relevance
    }
};

// Fungsi dapat dihubungkan ke input pencarian di navbar.
