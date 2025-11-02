// js/services/utils.js
// IMPORT dari components untuk bisa memanggil fungsi di renderMovieRow
import { showMovieDetail, openVideoPlayer } from '../components/detail.js';

export function hideAllPages() {
    document.querySelectorAll('.page-content').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById('main-header').classList.remove('hidden');
    document.getElementById('main-footer').classList.remove('hidden');
}

export function updateBackButton(currentPage) {
    const backButton = document.getElementById('back-button');
    if (currentPage === 'home' || currentPage === 'video-page') { // Sembunyikan juga di video page
        backButton.classList.remove('show');
    } else {
        backButton.classList.add('show');
    }
}

export function renderMovieRow(title, movieTitles) {
    let rowHTML = `
        <div class="row">
            <h2 class="row-title">${title}</h2>
            <div class="row-content">
    `;
    
    movieTitles.forEach(movieTitle => {
        rowHTML += `
            <div class="poster" onclick="showMovieDetail('${movieTitle}')">
                <div class="poster-img">${movieTitle}</div>
                <div class="poster-info">
                    <div class="poster-title">${movieTitle}</div>
                    <div class="poster-rating"><i class="fas fa-star"></i><span>8.8</span></div>
                </div>
            </div>
        `;
    });
    
    rowHTML += `
            </div>
        </div>
    `;
    return rowHTML;
}
