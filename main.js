let currentSlide = 0;

document.addEventListener("scroll", () => {
    let scrollProgress = window.scrollY / window.innerHeight;

    document.querySelector(".start").style.opacity = `${1 - scrollProgress}`;
    if (scrollProgress <= 1)
        document.querySelector(".description").style.opacity = `${scrollProgress}`+1;
    else if (scrollProgress >= 1 && scrollProgress <= 1.7)
        document.querySelector(".description").style.opacity = "1";
    else
        document.querySelector(".description").style.opacity = `${-scrollProgress+2}`;
    document.querySelector(".third").style.opacity = `${scrollProgress-1}`;

    if (scrollProgress === 0)
        document.querySelector(".to-top-button").style.opacity = `0`;
    else
        document.querySelector(".to-top-button").style.opacity = `1`;

    currentSlide = Math.floor(scrollProgress);

    if (scrollProgress >= 1.9)
        document.querySelector(".next-page-button").style.opacity = `0`;
    else
        document.querySelector(".next-page-button").style.opacity = `1`;
});

function nextSlide() {
    if (currentSlide < 2) {
        currentSlide++;
        window.scrollTo({top: currentSlide * window.innerHeight, behavior: "smooth"});
    }
}

function toTheTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
}

// document.addEventListener("keydown", (event) => {
//     if (event.key === "ArrowDown") nextSlide();
//     if (event.key === "ArrowUp") prevSlide();
// });