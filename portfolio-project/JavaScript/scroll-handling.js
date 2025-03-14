const cards = document.querySelectorAll('.card');
const aboutImage = document.querySelector('.about-image')
const typewriter = document.querySelector('.call-to-action')

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
        else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.2 // Trigger when 20% of the card is visible
});

cards.forEach(card => observer.observe(card));

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'visible' class when the image enters the viewport
            entry.target.classList.add('visible');
        } else {
            // Remove the 'visible' class when the image exits the viewport
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.2 // Trigger when 20% of the image is visible
});

imageObserver.observe(aboutImage);

const typewriterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
        }
    });
}, {
    threshold: 0.2
});

typewriterObserver.observe(typewriter)
