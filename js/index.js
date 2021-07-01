let collapseDropdown = $('#collapseDropdown'),
    btnToggleDropDown = $('#btnToggleDropDown'),
    mainNav = $('#mainNav'),
    wrapperMoveToTop = $('#wrapperMoveToTop'),
    sticky = $('#topBar').offset().top;

$(document).ready(function() {
    initEvent();
});

function initEvent() {
    $(window).on("scroll", onScroll);
    btnToggleDropDown.on('click', () => {
        collapseDropdown.toggleClass('d-none');
    });

    wrapperMoveToTop.on("click", moveToTop);

    $('.card__content--teacher').hover((event) => {
        let eventTarget = $(event.target);
        eventTarget.find('.card__sociallink--teacher').show();
    }, (event) => {
        let eventTarget = $(event.target);
        eventTarget.find('.card__sociallink--teacher').hide();
    })
}

function onScroll() {
    if ($(window).scrollTop() >= sticky) {
        mainNav.addClass("sticky-top--custom");
        wrapperMoveToTop.show();
    } else {
        mainNav.removeClass("sticky-top--custom");
        wrapperMoveToTop.hide();
    }
}

function moveToTop() {
    $(window).scrollTop(0);
}

$('#optionSlider').slick({
    dots: false,
    arrow: true,
    infinite: true,
    autoplay: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 800,
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
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
    ]
});
$('#courseSlider').slick({
    prevArrow: $('#prevArrow'),
    nextArrow: $('#nextArrow'),
    dots: false,
    arrow: false,
    infinite: true,
    autoplay: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
    ],
});
$('#reviewContent').slick({
    dots: true,
    infinite: true,
    arrow: false,
    prevArrow: null,
    nextArrow: null,
    autoplay: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 992,
            settings: {
                arrow: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrow: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
    ],
});
$('#logoSectionContent').slick({
    dots: false,
    infinite: true,
    arrow: false,
    autoplay: true,
    prevArrow: null,
    nextArrow: null,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
    ],
});