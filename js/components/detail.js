// js/components/detail.js
import { movies } from '../data/movies.js';
import { hideAllPages, updateBackButton } from '../services/utils.js';
import { backStack, currentPage } from '../navigation.js'; 

export function showMovieDetail(movieTitle) {
    clearIntervals();
    if (currentPage !== 'movie-detail') {
        backStack.push(currentPage); 
    }
    
    const movie = movies[movieTitle];
    if (!movie) return; 

    const detailPage = document.getElementById('movie-detail');
    
    const detailHTML = `
        `;

    detailPage.innerHTML = detailHTML;
    
    hideAllPages();
    detailPage.style.display = 'block';
    
    currentPage = 'movie-detail';
    updateBackButton(currentPage);
}

export function openVideoPlayer(movieTitle) {
    // Fungsi ini akan dipanggil dari detail.js
    // ... logic memanggil openVideoPlayer dari video-player.js ...
    alert(`Membuka Video Player untuk: ${movieTitle}`); // Dummy
}

export function addComment() {
    // ... logic addComment ...
    alert("Komentar ditambahkan (Dummy)");
}
