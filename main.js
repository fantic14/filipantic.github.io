document.addEventListener("wheel", (event) => event.preventDefault(), { passive: false }); // Disable mouse wheel

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
    document.querySelector(".third").style.opacity = `${scrollProgress-0.5}`;

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

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
        event.preventDefault(); // Prevent default only for navigation keys
        nextSlide();
    }
    if (event.key === "ArrowUp") {
        event.preventDefault();
        prevSlide();
    }
});

function nextSlide() {
    if (currentSlide < 2) {
        currentSlide++;
        window.scrollTo({top: currentSlide * window.innerHeight, behavior: "smooth"});
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        window.scrollTo({top: currentSlide * window.innerHeight, behavior: "smooth"});
    }
}

function toSpecificSlide(slideNumber){
    currentSlide = slideNumber;
    window.scrollTo({top: currentSlide * window.innerHeight, behavior: "smooth"});
}

function toTheTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
}