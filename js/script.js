const toggleButton = document.querySelector(".hamburger-button");
const html = document.querySelector("html");
const sections = document.querySelectorAll("section");
const nav = document.querySelector("nav");
const navbarLi = document.querySelectorAll("nav li");
const animations = document.querySelectorAll("#about p, #about table, #project section, #contact main, #contact address");

toggleButton.addEventListener("click", () => {
    nav.classList.toggle("active");
    html.classList.toggle("active");
})

document.querySelectorAll("nav li").forEach(n => n.
    addEventListener("click", () => {
        nav.classList.remove("active");
        html.classList.remove("active");
    }))

const options = {
    threshold: "0.7" // 70% of the section should be visible
};

const navOberver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Change navbar style on scroll to next section
                if (entry.target.id !== "banner") {
                    nav.classList.add("nav-scrolled");
                } else {
                    nav.classList.remove("nav-scrolled");
                }

                // Section Indicator
                navbarLi.forEach(li => {
                    // remove active class from other
                    li.classList.remove("active");
                    if (entry.target.id === li.classList.value) {
                        li.classList.add("active");
                    }
                })
            }
        });
    }, options);


sections.forEach(section => {
    navOberver.observe(section);
});


//for Animation if needed
const animationObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting);
            if(entry.isIntersecting) animationObserver.unobserve(entry.target);
        })
    },
    {
        threshold: 1
    }
)

animations.forEach(animation => {
    animationObserver.observe(animation);
});