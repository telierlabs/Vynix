// js/main.js (File yang Mengikat Semua Modul)

// 1. IMPORT SEMUA FUNGSI DARI FILE PECAHAN
import { showHomePage, showPage, goBack } from './navigation.js';
import { showMovieDetail, addComment } from './components/detail.js';
import { openVideoPlayer, togglePlayPause, toggleMute, addVideoComment } from './components/video-player.js';
import { openAIAssistant, closeAIAssistant, sendAIQuestion, handleAIKeyPress } from './components/ai-assistant.js';
import { openSearch, openUserProfile, startSubscription } from './services/auth.js';
import { initializeHeroCarousel, updateCarousel } from './components/carousel.js';


// 2. DAFTARKAN SEMUA FUNGSI KE GLOBAL 'window'
// Ini WAJIB agar fungsi bisa dipanggil dari 'onclick="..."' di index.html
window.showHomePage = showHomePage;
window.showPage = showPage;
window.goBack = goBack;

window.showMovieDetail = showMovieDetail;
window.addComment = addComment;

window.openVideoPlayer = openVideoPlayer;
window.togglePlayPause = togglePlayPause;
window.toggleMute = toggleMute;
window.addVideoComment = addVideoComment;

window.openAIAssistant = openAIAssistant;
window.closeAIAssistant = closeAIAssistant;
window.sendAIQuestion = sendAIQuestion;
window.handleAIKeyPress = handleAIKeyPress;

window.openSearch = openSearch;
window.openUserProfile = openUserProfile;
window.startSubscription = startSubscription;
window.updateCarousel = updateCarousel; // Untuk dot carousel

// 3. INISIALISASI
document.addEventListener('DOMContentLoaded', () => {
    // initializeHeroCarousel(); // Sudah dipanggil di showHomePage
    showHomePage();
});
