const header = document.querySelector('.header');
const logo = document.getElementById('logo');
const menuItems = document.querySelectorAll('.menu-item');
window.addEventListener('scroll', function () {
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        logo.src = './assets/images/logoBlack.png'; // Update logo src for scrolled state
    } else {
        header.classList.remove('scrolled');
        logo.src = './assets/images/logo.png'; // Revert logo src for default state
    }

});

menuItems.forEach(item => {
    item.addEventListener('mouseover', function () {
        header.classList.add('scrolled');
        logo.src = './assets/images/logoBlack.png'; // Add scrolled class on hover
    });
    item.addEventListener('mouseout', function () {
        if (window.scrollY <= 50) {
            header.classList.remove('scrolled');
            logo.src = './assets/images/logo.png'; // Remove scrolled class if not scrolling
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const menuCloseButton = document.querySelector(".menu-close");
    const mobileNav = document.querySelector(".mobile-nav");

    // Open the mobile menu
    menuButton.addEventListener("click", function () {
        mobileNav.classList.remove("hidden");
    });

    // Close the mobile menu
    menuCloseButton.addEventListener("click", function () {
        mobileNav.classList.add("hidden");
    });
});
