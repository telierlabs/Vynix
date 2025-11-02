// js/components/video-player.js
import { hideAllPages, updateBackButton, renderMovieRow } from '../services/utils.js'; 

export let isPlaying = false; 

export function updateVideoControls(isPlay) {
    isPlaying = isPlay;
    // ... logic update tombol play/pause ...
}
        
export function togglePlayPause() {
    updateVideoControls(!isPlaying); 
}

export function openVideoPlayer(movieTitle) {
    // ... logic rendering video player dan rekomendasi ...
    const videoPage = document.getElementById('video-page');
    
    const videoPlayerHTML = `
        `;
    
    videoPage.innerHTML = videoPlayerHTML; 

    hideAllPages();
    videoPage.style.display = 'flex';
    document.getElementById('main-header').classList.add('hidden');
    document.getElementById('main-footer').classList.add('hidden');
    
    currentPage = 'video-page';
    updateBackButton(currentPage);
    
    updateVideoControls(false); 
}

export function addVideoComment() {
    alert("Komentar video ditambahkan (Dummy)");
}

export function toggleMute() {
    alert("Tombol Mute ditekan (Dummy)");
}
