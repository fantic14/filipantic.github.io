document.addEventListener("scroll", () => {
    let scrollProgress = window.scrollY / window.innerHeight;
    console.log(scrollProgress)

    document.querySelector(".start").style.opacity = `${1 - scrollProgress}`;
    if (scrollProgress <= 1)
        document.querySelector(".description").style.opacity = `${scrollProgress}`;
    else
        document.querySelector(".description").style.opacity = `${-scrollProgress+3}`;
    document.querySelector(".second").style.opacity = `${scrollProgress-2}`;
});