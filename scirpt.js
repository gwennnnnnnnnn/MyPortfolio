document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.getElementById("burger-menu");
    const nav = document.querySelector("nav");

    // Toggle the 'open' class when the burger menu is clicked
    burgerMenu.addEventListener("click", function() {
        nav.classList.toggle("open");
    });
});
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"  // Smooth scrolling effect
    });
}

document.querySelector('.back-to-top').addEventListener('click', scrollToTop);
document.querySelector('.contact-form button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    alert("Your message has been sent!");
});
// For smooth scrolling to sections when clicking navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
