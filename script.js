// data.js - Menangani data mentah (movies.json)
const DATA = {
    fetchMovies: async () => {
        try {
            const response = await fetch('data/movies.json');
            if (!response.ok) throw new Error('Failed to load movies data.');
            return await response.json();
        } catch (error) {
            console.error("DATA_ERROR: Could not fetch movies:", error);
            // Data fallback untuk pitch
            return [
                { id: "F001", title: "Fallback Data Stream 1", poster: "placeholder-1.jpg", video: "dummy.mp4", description: "Minimal data stream loaded." },
                { id: "F002", title: "Fallback Data Stream 2", poster: "placeholder-2.jpg", video: "dummy.mp4", description: "Minimal data stream loaded." }
            ];
        }
    }
};
