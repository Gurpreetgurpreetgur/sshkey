// Variables
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;
const carousel = document.querySelector('.carousel-slide');

// Function to move the carousel to the correct position
function moveToSlide(index) {
    carousel.style.transform = `translateX(-${index * 33.33}%)`; // Move carousel left/right

    // Remove focus class from all images
    slides.forEach((img) => img.classList.remove('focus'));

    // Add focus class to the center image (index + 1 because we're showing 3 images at a time)
    slides[index + 1].classList.add('focus');
}

// Function to automatically move the carousel
function autoMove() {
    currentIndex = (currentIndex + 1) % (totalSlides - 2); // Loop the images
    moveToSlide(currentIndex);
}

// Function to initialize the carousel and ensure smooth functionality after refresh
function initializeCarousel() {
    moveToSlide(currentIndex);  // Initialize carousel to the first slide
    setInterval(autoMove, 4000); // Move automatically every 4 seconds
}

// Ensure the carousel is initialized correctly on page load (after refresh too)
window.onload = function() {
    // We need to ensure everything is loaded before initialization
    setTimeout(initializeCarousel, 100); // Delay initialization slightly after page load
};


// for header
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



