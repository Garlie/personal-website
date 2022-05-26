const toggleButton = document.querySelector('.hamburger-button');
const navbarLinks = document.querySelector('.navbar-links');
const sections = document.querySelectorAll('section');
const navbarLi = document.querySelectorAll('.navbar-links li');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    toggleButton.classList.toggle('active');
})

document.querySelectorAll(".navbar-links").forEach(n => n.
    addEventListener("click", () => {
        toggleButton.classList.remove("active");
        navbarLinks.classList.remove("active");
    }))
