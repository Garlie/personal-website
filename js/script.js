const toggleButton = document.querySelector(".hamburger-button");
const html = document.querySelector("html");
const sections = document.querySelectorAll("section");
const nav = document.querySelector("nav");
const navbarLi = document.querySelectorAll(".navbar-links li");

toggleButton.addEventListener("click", () => {
    nav.classList.toggle("active");
    html.classList.toggle("active");
})

document.querySelectorAll(".navbar-links").forEach(n => n.
    addEventListener("click", () => {
        nav.classList.remove("active");
        html.classList.toggle("active");
    }))

const options = {
    threshold: "0.6", // 60% of the section should be visible
};

const oberver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        if(e.isIntersecting) {
            // Change navbar style on scroll to next section
            if(e.target.id !== "landing"){
                nav.classList.add("scrolled");
            }else{
                nav.classList.remove("scrolled");
            }

            // Section Indicator
            navbarLi.forEach(li => {
                // remove active class from other
                li.classList.remove("active");
                if(e.target.id === li.classList.value) {
                    li.classList.add("active");
                }
            })
        }
    });
}, options);

sections.forEach((section) => {
    oberver.observe(section);
});

