// Reveal projects when scrolling
document.addEventListener("DOMContentLoaded", function () {
    let projects = document.querySelectorAll(".project");

    function revealOnScroll() {
        projects.forEach((project) => {
            let position = project.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (position < windowHeight - 100) {
                project.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once to reveal projects already in view
});

// Scroll to top button functionality
document.addEventListener("DOMContentLoaded", function () {
    let scrollToTopButton = document.createElement("button");
    scrollToTopButton.classList.add("floating-button");
    scrollToTopButton.innerText = "⬆ Top";
    document.body.appendChild(scrollToTopButton);

    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", function () {
        scrollToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollToTopButton.style.display = "none";
});
