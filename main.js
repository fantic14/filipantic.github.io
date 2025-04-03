document.addEventListener("wheel", (event) => event.preventDefault(), { passive: false }); // Disable mouse wheel

let currentSlide = 0;


// TODO when first time pressed 'Who am i?' in navbar, scroll is not smooth at all
document.addEventListener("scroll", () => {
    let scrollProgress = window.scrollY / window.innerHeight;

    document.querySelector(".start").style.opacity = `${1.5 - scrollProgress}`;

    if (scrollProgress <= 0.5)
        document.querySelector(".description").style.opacity = `${scrollProgress}`;
    else
        document.querySelector(".description").style.opacity = `${-scrollProgress+2}`;

    if (scrollProgress <= 1.5)
        document.querySelector(".connect-and-projects").style.opacity = `0`;
    else
        document.querySelector(".connect-and-projects").style.opacity = `${scrollProgress-0.5}`;

    if (scrollProgress === 0)
        document.querySelector(".to-top-button").style.opacity = `0`;
    else
        document.querySelector(".to-top-button").style.opacity = `1`;

    currentSlide = Math.ceil(scrollProgress);

    setTimeout(() => {
        if (currentSlide === 0) {
            document.querySelector(".start").style.zIndex = "1000";
            document.querySelector(".description").style.zIndex = "1";
            document.querySelector(".connect-and-projects").style.zIndex = "-1";
            console.log(currentSlide);
        } else if (currentSlide === 1) {
            document.querySelector(".start").style.zIndex = "-1";
            document.querySelector(".description").style.zIndex = "1000";
            document.querySelector(".connect-and-projects").style.zIndex = "-1";
            console.log(currentSlide);
        } else {
            document.querySelector(".start").style.zIndex = "-1";
            document.querySelector(".description").style.zIndex = "-1";
            document.querySelector(".connect-and-projects").style.zIndex = "1000";
            console.log(currentSlide);
        }
    }, 1000);

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
    while (currentSlide > slideNumber){
        prevSlide();
    }
    while (currentSlide < slideNumber){
        nextSlide();
    }
}

function toTheTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
}