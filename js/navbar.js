const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

const links =
document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    hamburger.classList.toggle("open");

});

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        hamburger.classList.remove("open");

    });

});