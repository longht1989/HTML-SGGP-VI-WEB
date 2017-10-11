/* ====================================
   Onload functions
   ==================================== */
$(".search > span").click(function() {
    $(".search-box").toggle();
    $(".search").toggleClass("active");
})

/* show hide mobile search & menu open */

$('#m-site-header .fa-bars').click(function() {
    $(this).toggleClass('active');
    $('#site-header .menu-open').toggleClass('show');
    $('#site-header .search-open').removeClass('show');
    $('#site-header .fa-search').removeClass('active');
});
$('#m-site-header .fa-search').click(function() {
    $(this).toggleClass('active');
    $('#site-header .search-open').toggleClass('show');
    $('#site-header .fa-bars').removeClass('active');
    $('#site-header .menu-open').removeClass('show');
});


/* show hide desktop search open */

$('#desktop-site-header .fa-search').click(function() {
    $(this).parent('.search-btn').toggleClass('active');
    $(this).next('.search-open').toggleClass('show');
});


/*demo slider*/

$(function() {
    /*demo slider */
    $('#slider-demo').bxSlider({
        pager: false,
        maxSlides: 1,
        minSlides: 1,
        nextText: '',
        prevText: '',
        nextSelector: '#demo-slider-next',
        prevSelector: '#demo-slider-prev'
    });
    /*demo slider */
    $('#subcate-slider').bxSlider({
        pager: false,
        maxSlides: 3,
        minSlides: 3,
        slideMargin: 20,
        slideWidth: 163,
        nextText: '',
        prevText: '',
        nextSelector: '#demo-slider-next',
        prevSelector: '#demo-slider-prev'
    });
    /*demo slider */
    $('#subcate-slider-01').bxSlider({
        pager: false,
        maxSlides: 2,
        minSlides: 2,
        slideMargin: 20,
        slideWidth: 262,
        nextText: '',
        prevText: '',
        nextSelector: '#demo-slider-next-01',
        prevSelector: '#demo-slider-prev-01'
    });
    /*demo slider 02 */
    $('#slider-demo-02').bxSlider({
        maxSlides: 1,
        minSlides: 1,
        nextText: '',
        prevText: '',
        nextSelector: '#demo-slider-02-next',
        prevSelector: '#demo-slider-02-prev'
    });
    /*demo slider 01 */
    $('#slider-demo-01').bxSlider({
        pager: false,
        maxSlides: 1,
        minSlides: 1,
        nextText: '',
        prevText: '',
        nextSelector: '#demo-slider-next-01',
        prevSelector: '#demo-slider-prev-01'
    });
    /*demo slider 01 */
    $('#qc-slider').bxSlider({
        pager: false,
        maxSlides: 7,
        minSlides: 6,
        slideWidth: 160,
        slideMargin: 20,
        nextText: '',
        prevText: '',
        nextSelector: '#qc-slider-next',
        prevSelector: '#qc-slider-prev'
    });
    /*demo slider 05 */
    $('#slider-demo-05').bxSlider({
        maxSlides: 1,
        minSlides: 1,
        nextText: '',
        prevText: '',
        nextSelector: '#demo-slider-next-05',
        prevSelector: '#demo-slider-prev-05',
        pager: 0
    });
});

/*scrool to top */
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scrolltotop').fadeIn();
    } else {
        $('.scrolltotop').fadeOut();
    }
});

//Click event to scroll to top
$('.scrolltotop').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
});


/*scrollbar for category top*/
$('.category__aside-col .scrollbar-outer').scrollbar();
