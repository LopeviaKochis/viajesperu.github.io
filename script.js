let currentSlide = 0;

function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.slide');
    if (slideIndex >= slides.length) currentSlide = 0;
    if (slideIndex < 0) currentSlide = slides.length - 1;

    slides.forEach(slide => slide.style.transform = `translateX(-${currentSlide * 100}%)`);
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}
