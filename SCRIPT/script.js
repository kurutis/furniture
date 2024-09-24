const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;
const slideWidth = slides[0].offsetWidth;

function updateSlider() {
    sliderTrack.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  updateSlider();
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  updateSlider();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

updateSlider(); // Начальное состояние слайдера