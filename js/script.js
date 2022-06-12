const toggleButton = document.querySelector(".hamburger-button");
const html = document.querySelector("html");
const sections = document.querySelectorAll("section");
const nav = document.querySelector("nav");
const navbarLi = document.querySelectorAll("nav li");


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

const oberver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            // Change navbar style on scroll to next section
            if(entry.target.id !== "banner"){
                nav.classList.add("nav-scrolled");
            }else{
                nav.classList.remove("nav-scrolled");
            }

            // Section Indicator
            navbarLi.forEach(li => {
                // remove active class from other
                li.classList.remove("active");
                if(entry.target.id === li.classList.value) {
                    li.classList.add("active");
                }
            })
        }
    });
}, options);


sections.forEach(section => {
    oberver.observe(section);
});


