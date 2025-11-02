// js/navigation.js
import { hideAllPages, updateBackButton } from './services/utils.js';
import { initializeHeroCarousel, clearIntervals } from './components/carousel.js'; 

export let currentPage = 'home';
export const backStack = [];

function updateActiveNav(activePage) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.textContent.trim() === activePage) {
            link.classList.add('active');
        }
    });
}

export function showHomePage() {
    clearIntervals();
    initializeHeroCarousel();
    hideAllPages();
    document.getElementById('home-page').style.display = 'block';
    updateActiveNav('Beranda');
    currentPage = 'home';
    backStack.length = 0; 
    updateBackButton(currentPage);
}

export function showPage(page) {
    clearIntervals();
    
    if (currentPage !== page && currentPage !== 'movie-detail' && currentPage !== 'video-page') {
        backStack.push(currentPage);
    }
    
    hideAllPages();
    
    const pageMap = {
        'movies': ['movies-page', 'Film'],
        'series': ['series-page', 'Serial'],
        'mylist': ['mylist-page', 'Daftar Saya'],
        'subscription': ['subscription-page', 'Langganan']
    };
    
    const [pageId, navName] = pageMap[page] || [];

    if (pageId) {
        document.getElementById(pageId).style.display = 'flex'; 
        updateActiveNav(navName);
        currentPage = page;
    } else {
        showHomePage(); 
    }
    
    updateBackButton(currentPage);
}

export function goBack() {
    if (backStack.length === 0) {
        showHomePage(); 
        return; 
    }

    const previousPage = backStack.pop();
    
    if (previousPage === 'home') {
        showHomePage(); 
    } else if (['movies', 'series', 'mylist', 'subscription'].includes(previousPage)) {
        showPage(previousPage); 
    } else {
        showHomePage(); 
    }
}
