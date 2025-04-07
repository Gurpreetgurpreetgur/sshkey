// Hamburger Menu Toggle Functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle the "active" class on the nav-links and hamburger icon
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Add active class to the clicked link
const navLinksItems = document.querySelectorAll('.nav-links li a');

navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        // Remove the active class from all links
        navLinksItems.forEach(item => item.classList.remove('active'));

        // Add the active class to the clicked link
        link.classList.add('active');

        // Close the mobile menu after clicking a link
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Smooth Scrolling for Anchor Links
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();  // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target element's id
        const targetElement = document.getElementById(targetId);

        // Scroll to the target element
        window.scrollTo({
            top: targetElement.offsetTop - 70,  // Offset to avoid hiding content behind the header
            behavior: 'smooth',
        });
    });
});
