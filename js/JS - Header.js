var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 7000, // 7000 milisegundos (7 segundos)
        disableOnInteraction: false, // Continúa el autoplay aunque el usuario interactúe
    }
});

var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 6000, // 6000 milisegundos (6 segundos)
        disableOnInteraction: false, // Continúa el autoplay aunque el usuario interactúe
    }
});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function (input) {
    input.addEventListener('change', function () {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    });
});




