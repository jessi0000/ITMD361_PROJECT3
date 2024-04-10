// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Theme Toggle
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
}

document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('themeToggle');
    if (themeButton) {
        themeButton.addEventListener('click', toggleTheme);
    }

    // Load the saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    // Show button when scrolling down
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    // Scroll to the top of the document when clicking on the button
    scrollTopBtn.onclick = function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
});
function initMap() {
    var city = {lat: 41.8781, lng: -87.6298};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: city
    });
    var marker = new google.maps.Marker({
        position: city,
        map: map
    });
}


