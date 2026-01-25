const slider = document.getElementById("slider");
const dots = document.querySelectorAll(".dot");

let index = 0;
const total = dots.length;

function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

/* AUTO SLIDE – EVERY 1 SECOND */
let autoSlide = setInterval(() => {
    index = (index + 1) % total;
    updateSlider();
}, 1000);

/* DOT CLICK */
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        updateSlider();

        /* reset timer on manual click */
        clearInterval(autoSlide);
        autoSlide = setInterval(() => {
            index = (index + 1) % total;
            updateSlider();
        }, 1000);
    });
});
