$(document).ready(function () {
    var owl = $('.owl-carousel');
    var owl3 = $('.owl-carousel-3');
    var owl5 = $('.owl-carousel-5');
    loopCarousel(owl,1,0,1500);
    loopCarousel(owl3,3,20,1500);
    centerCarousel(owl5,20,1500);

   

    function loopCarousel(owl,item,margin,ms) {
        owl.owlCarousel({
            center:true,
            items: item,
            loop: true,
            nav: true,
            margin: margin,
            autoplay: true,
            autoplayTimeout: ms,
            autoplayHoverPause: true
        });
        arrCarousel(owl);
    }

    
    function centerCarousel(owl,margin,ms) {
        owl5.owlCarousel({
            center: true,
            items: 2,
            loop: true,
            nav: true,
            margin: margin,
            responsive: {
                600: {
                    items: 4
                }
            },
            autoplay: true,
            autoplayTimeout: ms,
            autoplayHoverPause: true
        });
        arrCarousel(owl);
    }




    function arrCarousel(owl) {
        $('.arr--right').on('click', function () {
            owl.trigger('next.owl.carousel', [300]);
        });
        $('.arr--left').on('click', function () {
            owl.trigger('prev.owl.carousel', [300]);
        });
    }




})


