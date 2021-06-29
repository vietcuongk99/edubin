let collapseDropdown = $('#collapseDropdown'),
    btnToggleDropDown = $('#btnToggleDropDown'),
    secondNav = $('#secondNav'),
    sticky = secondNav.offset().top;

$(document).ready(function() {
    initEvent();
});

function initEvent() {
    $(window).on("scroll", onScroll);
    btnToggleDropDown.on('click', () => {
        collapseDropdown.toggleClass('d-none');
    });
}

function onScroll() {
    if ($(window).scrollTop() > sticky) {
        secondNav.addClass("sticky-top--custom");
    } else {
        secondNav.removeClass("sticky-top--custom");
    }
}


$('#platformSlider').slick({
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
        // {
        //     breakpoint: 480,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         infinite: true,
        //     }
        // }
    ]
});