$(document).ready(function () {
    var owl = $('.owl-carousel');
    var owl3 = $('.owl-carousel-3');
    var owl5 = $('.owl-carousel-5');

   

        owl.owlCarousel({
            items: 1,
            nav: true,
            loop: true,
            smartSpeed:1000,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true
        });
        owl3.owlCarousel({
            items: 3,
            stagePadding:0,
            smartSpeed:1000,
            loop: true,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                  items: 1
                },
                600: {
                  items: 3
                }              
            }
        });
    
        owl5.owlCarousel({
            center:true,
            smartSpeed:1000,
            items: 3,
            stagePadding: 150,
            nav:true,
            loop: true,
            margin: 20,
            autoplay: false,
            autoplayTimeout: 1000,
            autoplayHoverPause: true
        });



        // owl5.owlCarousel({
        //     loop: true,
        //     nav: true,
        //     items:5,
        //     // stagePadding:200,
        //     center:true,
        //     lazyLoad: true,
        //     margin: 20,
        //     video: true
        //     // responsive: {
        //     //   0: {
        //     //     items: 1
        //     //   },
        //     //   600: {
        //     //     items: 2
        //     //   }
        //     // //   960: {
        //     // //     items: 4,
        //     // //   },
        //     // //   1200: {
        //     // //     items: 5
        //     // //   }
        //     // }


        // owl5.owlCarousel({
        //     loop: true,
        //     margin: 10,
        //     responsiveClass: true,
        //     responsive: {
        //       0: {
        //         items: 1,
        //         nav: true
        //       },
        //       600: {
        //         items: 3,
        //         nav: false
        //       },
        //       1000: {
        //         items: 5,
        //         nav: true,
        //         loop: false,
        //         margin: 20
        //       }
        //     }
        //   })



        // clickCarousel(owl);
        // clickCarousel(owl3);
        // clickCarousel(owl5);

    // function clickCarousel(owl) {
    //     $('.arr--right').on('click',function () {
    //         owl.trigger('next.owl.carousel',[500]);
    //     });
    //     $('.arr--left').on('click',function () {
    //         owl.trigger('prev.owl.carousel',[500]);
    //     });
    // }




})


