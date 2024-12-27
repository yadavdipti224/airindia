// Scroll Bottom to top
 
$(function() {
    $(document).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('.scroll-top-wrapper').addClass('show');
        } else {
            $('.scroll-top-wrapper').removeClass('show');
        } 
    });
    $('.scroll-top-wrapper').on('click', scrollToTop);
});
 

function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({
        scrollTop: offsetTop
    }, 500, 'linear');
}
 
// Counter 

function inVisible(element) { 
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height(); 
    if (ElementBottom <= WindowBottom && ElementTop >= WindowTop) animate(element);
}

function animate(element) { 
    if (!element.hasClass("ms-animated")) {
        var maxval = element.data("max");
        var html = element.html();
        element.addClass("ms-animated");
        $({
            countNum: element.html(),
        }).animate(
            {
                countNum: maxval,
            },
            { 
                duration: 5000,
                easing: "linear",
                step: function () {
                    element.html(Math.floor(this.countNum) + html);
                },
                complete: function () {
                    element.html(this.countNum + html);
                },
            }
        );
    }
}

$(function () { 
    $(window).scroll(function () { 
        $("h3[data-max]").each(function () {
            inVisible($(this));
        });
    });
});

// Animate CSS

$('.animate').scrolla({
    mobile: false,
    once: false
});

$('.animate').scrolla({
    once: false
});

// Owl Slider

$('#serviceSlider').owlCarousel({
    loop:true,
    margin:0,
    smartSpeed: 1000,
    // autoplay:2000,
    nav:true,
    navText: ["", ""],
    dots:false,
    loop: true,
    responsive:{
        0:{ items:2 },
        500:{ items:3 },
        768:{ items:4 },
        900:{ items:3 },
        1200:{ items:4 }
    }
});  

$("#familySlider").owlCarousel({
    margin: 15, 
    center:true,
    smartSpeed: 1000,
    touchDrag  : false,
    mouseDrag  : false, 
    autoplay: 5000,
    dots: true,
    nav: false,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    loop: true,
    responsive: {
        0: {items: 1},
        600: {items: 1},
        1000: {items: 1},
    },
}); 

$('#Clients1').owlCarousel({
    loop:true,
    margin:30, 
    rtl: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplaySpeed: 5000,
    smartSpeed: 6000,
    nav:false,
    loop: true,
    responsive:{
        0:{items:2},
        600:{items:4},
        1000:{items:6}
    }
});

$('#Clients2').owlCarousel({
    loop:true,
    margin:30, 
    rtl: true,
    autoplay: true,
    slideTransition: 'linear',
    autoplaySpeed: 5000,
    smartSpeed: 6000,
    nav:false,
    loop: true,
    responsive:{
        0:{items:2},
        600:{items:4},
        1000:{items:6}
    }
});


 
