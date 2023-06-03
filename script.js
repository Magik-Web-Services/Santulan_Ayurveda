var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let hamburger = document.getElementById('hamburger');
let mob_header = document.getElementById('mob-header');
let hamburgerClass = hamburger.classList;
let menu = mob_header.classList;

hamburger.addEventListener("click", function () {
    if (hamburgerClass.contains('fa-bars')) {
        hamburgerClass.remove('fa-bars');
        hamburgerClass.add('fa-xmark');
        menu.add('active');
        menu.remove('no_active');
    } else {
        hamburgerClass.add('fa-bars');
        hamburgerClass.remove('fa-xmark');
        menu.remove('active');
        menu.add('no_active');
    }
})