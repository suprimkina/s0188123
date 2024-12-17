$('.slick-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
});
$('.slick-slider-two').slick({
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    accessibility: false,
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        }
    ]
});
$('.slick-slider-three').slick({
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2500,
    accessibility: false,
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        }
    ]
});

$(function() {

    // Показываем подменю при наведении
    $('.dropdown-toggle').on('mouseover', function(e) {
        $(this) // Элемент, на который наведен курсор
            .parents('.dropdown') // Ищем ближайшего родителя с классом dropdown
            .addClass('show'); // Добавляем этому классу класс show
        $(this)
            .siblings('.dropdown-menu-wrapper') // Ищем соседа с классом dropdown-menu-wrapper
            .find('.dropdown-menu') // У класса dropdown-menu-wrapper ищем дочерний элемент с классом dropdown-menu
            .addClass('show');
    })

    // Скрываем подменю при наведении
    $('.dropdown-toggle').on('mouseout', function(e) {
        $(this).parents('.dropdown').removeClass('show');
        $(this).siblings('.dropdown-menu-wrapper').find('.dropdown-menu').removeClass('show');
    })
})


