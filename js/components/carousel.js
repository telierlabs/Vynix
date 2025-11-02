// js/components/carousel.js
import { showMovieDetail, openVideoPlayer } from './detail.js';
import { renderMovieRow } from '../services/utils.js';

let currentSlide = 0;
let slideInterval;
const totalSlides = 3; 
const slideDuration = 10000; 

function updateCarousel(index) {
    currentSlide = index;
    const offset = -index * 100;
    const carouselContent = document.getElementById('hero-carousel-content');
    if (carouselContent) {
        carouselContent.style.transform = `translateX(${offset}vw)`;
    }
    
    document.querySelectorAll('.carousel-dots .dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function startAutoSlide() {
    clearIntervals();
    slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel(currentSlide);
    }, slideDuration);
}

export function clearIntervals() {
    clearInterval(slideInterval);
}

export function initializeHeroCarousel() {
    const heroCarouselHTML = `
        <div class="hero-carousel-container">
            <div class="hero-carousel-content" id="hero-carousel-content">
                </div>
            <div class="carousel-dots" id="carousel-dots">
                <span class="dot active" data-slide="0" onclick="updateCarousel(0)"></span>
                <span class="dot" data-slide="1" onclick="updateCarousel(1)"></span>
                <span class="dot" data-slide="2" onclick="updateCarousel(2)"></span>
            </div>
        </div>
    `;
    
    const movieRows = `
        ${renderMovieRow('Top Film Minggu Ini', ['The Shawshank Redemption', 'House of the Dragon', 'Inception', 'The Dark Knight'])}
        ${renderMovieRow('Film Terpopuler', ['The Dark Knight', 'Inception', 'Interstellar', 'House of the Dragon'])}
    `;
    
    const homePage = document.getElementById('home-page');
    homePage.innerHTML = heroCarouselHTML + movieRows;
    
    startAutoSlide();
}
