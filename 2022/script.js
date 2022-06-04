$(document).ready(function () {
    var mySwiper = new Swiper(".swiper", {
        autoHeight: false,
        autoplay: false,
        speed: 500,
        direction: "horizontal",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar"
        },
        loop: false,
        effect: "slide",
        spaceBetween: 30,
        on: {
            init: function () {
                $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
                $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
            },
            slideChangeTransitionStart: function () {
                $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
                $(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
            },
            // On last slide swipe, go to first slide
            transitionEnd: function () {
                if (this.realIndex === 0) {
                    // Redirect to next page
                    window.location.href = "../2021/";
                }
            }
        }
    });
    mySwiper.slideTo(1);
    $(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
        mySwiper.slideTo($(this).index());
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(this).addClass("active");
    });

});