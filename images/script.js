document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.project-slide');
    const sliderContainer = document.querySelector('.projects-slider');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentSlide = 0;
    let isTransitioning = false;

    // Clone first and last slides
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);

    // Add clones to the slider container
    sliderContainer.appendChild(firstClone);
    sliderContainer.insertBefore(lastClone, slides[0]);

    const allSlides = document.querySelectorAll('.project-slide');
    const totalSlides = allSlides.length;

    function updateSlides() {
        allSlides.forEach((slide, index) => {
            if (index === currentSlide + 1) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        const offset = -(currentSlide + 1) * slides[0].clientWidth;
        sliderContainer.style.transform = `translateX(${offset}px)`;
    }

    function moveToSlide(index) {
        if (isTransitioning) return;
        isTransitioning = true;

        sliderContainer.style.transition = 'transform 0.5s ease-in-out';
        currentSlide = index;
        updateSlides();

        setTimeout(() => {
            sliderContainer.style.transition = 'none';
            if (currentSlide === totalSlides - 1) {
                currentSlide = 0;
            } else if (currentSlide === -1) {
                currentSlide = slides.length - 1;
            }
            updateSlides();
            isTransitioning = false;
        }, 500);
    }

    prevButton.addEventListener('click', () => {
        moveToSlide(currentSlide - 1);
    });

    nextButton.addEventListener('click', () => {
        moveToSlide(currentSlide + 1);
    });

    // Initialize the slider
    moveToSlide(currentSlide);
});
