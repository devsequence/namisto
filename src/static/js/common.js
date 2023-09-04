AOS.init({disable: 'mobile'});

$(window).on('scroll', function() {
    var $this = $(this),
        $hero = $('.hero'),
        $header = $('.header');
    if($('.hero').length > 0){
        if ($this.scrollTop() > $hero.height() - 100) {
            $header.addClass('before-scroll-nav');
        }else{
            $header.removeClass('before-scroll-nav');
        }
        if ($this.scrollTop() > $hero.height() + 50) {
            $header.addClass('scroll-nav');
        }
        else{
            $header.removeClass('scroll-nav');
        }
    }
});

$().fancybox({
    backFocus : false,
    selector : '.certificates-slider .slide:not(.slick-cloned) ',
});
$('.certificates-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    dots: true,
    prevArrow: $('.certificates-nav .prev'),
    nextArrow: $('.certificates-nav .next'),
    appendDots: $('.certificates-slider-dots'),
    autoplaySpeed: 2000,
    // mobileFirst: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
    ]
});
$('.team-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    dots: true,
    prevArrow: $('.team-nav .prev'),
    nextArrow: $('.team-nav .next'),
    appendDots: $('.team-slider-dots'),
    autoplaySpeed: 2000,
    // mobileFirst: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 567,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
    ]
});
$('.hero-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    prevArrow: $('.hero-nav .prev'),
    nextArrow: $('.hero-nav .next'),
    // responsive: [{
    //     breakpoint: 992,
    //     settings: {
    //         dots: true,
    //     }
    // }]
});
$('.offers-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    dots: true,
    appendDots: $('.offers-slider-dots'),
    prevArrow: $('.offers-nav .prev'),
    nextArrow: $('.offers-nav .next'),
    autoplaySpeed: 2000,
    // mobileFirst: true,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
    ]
});
$('.work-slider__service').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    dots: true,
    appendDots: $('.work-slider-dots'),
    prevArrow: $('.work-nav .prev'),
    nextArrow: $('.work-nav .next'),
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
    ]
});
$('.work-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    dots: true,
    appendDots: $('.work-slider-dots'),
    prevArrow: $('.work-nav .prev'),
    nextArrow: $('.work-nav .next'),
});
$('.reviews-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    appendDots: $('.reviews-slider-dots'),
    prevArrow: $('.reviews-nav .prev'),
    nextArrow: $('.reviews-nav .next'),
    responsive: [
        {
            breakpoint: 992,
            settings: {
                variableWidth: false,
            }
        },
    ]
});
$('.has-sub .has-sub__title').on('click', function (e) {
    e.preventDefault();
    const $ths = $(this);
    if($ths.hasClass('active')){
        $ths.removeClass('active');
        $ths.next().slideUp().removeClass('active');
    }else{
        $('.has-sub .has-sub__title').removeClass('active');
        $('.has-sub ul').slideUp();
        $ths.addClass('active');
        $ths.next().slideDown().addClass('active');
    }
});
$('.faq-item__title').on('click', function (e) {
    e.preventDefault();
    const $ths = $(this);
    if($ths.hasClass('active')){
        $ths.removeClass('active');
        $ths.parent().removeClass('active');
        $ths.next().slideUp().removeClass('active');
    }else{
        $('.faq-item__title, .faq-item').removeClass('active');
        $ths.addClass('active');
        $ths.parent().addClass('active');
        $ths.next().slideDown().addClass('active');
    }
});



if($(window).width() <= 992){
    $('.tab-item').each(function (e) {
        const $ths = $(this),
            $thsData = $ths.attr('data-tab'),
            $thsHtml = $ths.html();
        $('a[data-tab-nav='+$thsData+']').parent().append('<div class="service-item tab-item">'+$thsHtml+'</div>');
        $ths.remove();
    });
    $('.tab-nav__link').on('click', function (e) {
        e.preventDefault();
        const $ths = $(this);
        if($ths.hasClass('active')){
            $ths.removeClass('active');
            $ths.parent().find('.service-item ').removeClass('active');
        }else{
            $('.has-sub a, .tab-item').removeClass('active');
            $ths.addClass('active');
            $ths.parent().find('.service-item ').addClass('active');
        }
    })
}else {
    $('.has-sub a.tab-nav__link').on('click', function (e) {
        const $ths = $(this),
            $thsHref = $ths.attr('data-tab-nav'),
            $thsData = $thsHref;
        e.preventDefault();
        $('.has-sub a, .tab-item').removeClass('active');
        $ths.toggleClass('active');
        $('div[data-tab='+$thsData+']').addClass('active');
    });
}
if($('.hero').length > 0){}else{
    $('.header').addClass('page-nav');
    $(window).on('scroll', function() {
        var $this = $(this),
            $hero = $('.top'),
            $header = $('.header');
        if($('.top').length > 0){
            if ($this.scrollTop() > $hero.height() - 20) {
                $header.addClass('before-scroll-nav');
            }else{
                $header.removeClass('before-scroll-nav');
            }
            if ($this.scrollTop() > $hero.height() + 100) {
                $header.addClass('scroll-nav');
            }
            else{
                $header.removeClass('scroll-nav');
            }
        }
    });
}
$('.header-btn').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header').toggleClass('active');
    $('body').toggleClass('scroll');
});
$('.location-list__title, .header-lang__title').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next().toggleClass('active');
});
$(document).mouseup( function(e){ // событие клика по веб-документу
    var locationList = $( ".location-list" ); // тут указываем ID элемента
    if ( !locationList.is(e.target) // если клик был не по нашему блоку
        && locationList.has(e.target).length === 0 ) { // и не по его дочерним элементам
        $('.location-list__title').removeClass('active');
        $('.location-list__list').removeClass('active');
    }
});
$(document).mouseup( function(e){ // событие клика по веб-документу
    var locationList = $( ".header-lang" ); // тут указываем ID элемента
    if ( !locationList.is(e.target) // если клик был не по нашему блоку
        && locationList.has(e.target).length === 0 ) { // и не по его дочерним элементам
        $('.header-lang__title').removeClass('active');
        $('.header-lang__list').removeClass('active');
    }
});
var count;
$(".tab-item__list input").change(function() {
    count = 0;
    var table_abc = $(".tab-item__list input");
    for (var i = 0; i < table_abc.length ; ++i) {
        if ($(table_abc[i]).prop('checked')) {
            var plusTen = $(table_abc[i]).val() * 10;
            count += parseInt(plusTen, 10);
        }
    }
    var countLast = count/ 10;
    if(countLast < 35){
        $('.progress-item__line span').css('width', countLast+'%')

    }else{
        $('.progress-item__line span').css('width', '35%')
    }

});
$('.btn-blue').on('click', function () {
    $('.form-tab__item.active').removeClass('active').next().addClass('active');
    $('.btn-gray').removeClass('disabled').next().text('Send a request').attr('type', 'submit');
    $('.progress-item__line').addClass('check');
});
$('.btn-gray').on('click', function () {
    $('.form-tab__item.active').removeClass('active').prev().addClass('active');
    $(this).addClass('disabled').next().text('Next').attr('type', 'button');
    $('.progress-item__line').removeClass('check');
});
function popupOpen() {
    var $popupButton = $('.btn-popup');
    $popupButton.on('click', function (e) {
        var $this = $(this);
        var popupButtonData = $this.data('popup');
        $('.popup').removeClass('active');
        $('body').addClass('scroll');
        $('div[data-popup = '+popupButtonData+']').addClass('active');
        // $('body').addClass('scroll');
    });
}
popupOpen();
$('.popup-close').on('click', function (e) {
    var $this = $(this);
    $this.parents('.popup').removeClass('active');
    $('.popup-overlay').removeClass('active');
    $('body').removeClass('scroll');
});
$('.popup-overlay').on('click', function (e) {
    var $this = $(this);
    $this.removeClass('active');
    $('.popup').removeClass('active');
    $('body').removeClass('scroll');
});