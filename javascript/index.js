const hero = document.querySelector(".hero");



document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');


    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: false,
        autoplay: true,
    },
});


function subscribe() {
    const email = document.getElementById('email').value;
    if (email) {
        alert(`Thank you for subscribing with email: ${email}`);
    } else {
        alert('Please enter an email address.');
    }
}




