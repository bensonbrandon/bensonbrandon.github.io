document.addEventListener("DOMContentLoaded", function () {
    const homeButton = document.getElementById("home-btn");
    const projectsButton = document.getElementById("projects-btn");
    const homeSection = document.getElementById("home");
    const projectsSection = document.getElementById("projects");

    // Function to show the Home page
    function showHomePage() {
        homeSection.style.display = "block";
        projectsSection.style.display = "none";
    }

    // Function to show the Projects page
    function showProjectsPage() {
        homeSection.style.display = "none";
        projectsSection.style.display = "block";
    }

    // Initial page load: show the Home page
    showHomePage();

    // Add click event listeners to the buttons
    homeButton.addEventListener("click", showHomePage);
    projectsButton.addEventListener("click", showProjectsPage);

    // Function to activate the description pop-up effect on scroll
    function activateDescriptions() {
        const projectImages = document.querySelectorAll(".project-image");
        const projectDescriptions = document.querySelectorAll(".project-description");

        projectImages.forEach((image, index) => {
            const rect = image.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                projectDescriptions[index].classList.add("active");
            }
        });
    }

    // Add scroll event listener to trigger the description pop-up effect
    window.addEventListener("scroll", activateDescriptions);
});
