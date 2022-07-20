document.addEventListener("DOMContentLoaded", () => {
    const elementosCarousel = document.querySelectorAll(".carousel");
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -60,
        shift: 5,
        padding: 5,
        numVisble: 3,
        indicators: true
    });
});