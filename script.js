// ==============================
// Portfolio JavaScript
// ==============================

// Show a message when the page loads
window.addEventListener("load", function () {
    console.log("Welcome to Gedda Keerthi Sri's Portfolio!");
});


// ==============================
// Smooth navigation
// ==============================

document.querySelectorAll("nav a").forEach(function (link) {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ==============================
// Current year in footer
// ==============================

const footerText = document.querySelector("footer p");

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.innerHTML =
        `© ${currentYear} Gedda Keerthi Sri. All Rights Reserved.`;

}
