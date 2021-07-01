let collapseDropdown = $('#collapseDropdown'),
    btnToggleDropDown = $('#btnToggleDropDown'),
    mainNav = $('#mainNav'),
    btnMoveToTop = $('#btnMoveToTop'),
    sticky = $('#topBar').offset().top;

$(document).ready(function() {
    addSlider();
    getCourseData();
    initEvent();
});

function initEvent() {
    $(window).on("scroll", onScroll);
    btnToggleDropDown.on('click', () => {
        collapseDropdown.toggleClass('d-none');
    });
    btnMoveToTop.on("click", moveToTop);
    $('.card__content--teacher>div').hover((event) => {
        toggleTeacherLink($(event.target));
    }, (event) => {
        toggleTeacherLink($(event.target));
    });
}

function toggleTeacherLink(target) {
    target.find('.card__sociallink--teacher').toggleClass("d-none");
}

function onScroll() {
    if ($(window).scrollTop() >= sticky) {
        mainNav.addClass("sticky-top--custom");
        btnMoveToTop.show();
    } else {
        mainNav.removeClass("sticky-top--custom");
        btnMoveToTop.hide();
    }
}

function moveToTop() {
    $(window).scrollTop(0);
}

function getCourseData() {
    $.ajax({
        method: "GET",
        url: "https://60d4611a61160900173cb070.mockapi.io/courses",
        contentType: "application/json",
    }).done(function(data) {
        loadCourseData(data);
    }).fail(function(err) {
        console.log(err);
    });
}

function loadCourseData(data) {
    $('#courseSlider').empty();
    for (course of data) {
        let card = `<div class="card__wrapper--courses">
    <div class="card border-0 shadow">
        <div class="position-absolute w-100">
            <div class="d-flex justify-content-between align-items-center py-2 px-3 border-top">
                <span class="bg-darkblue p-1 rounded text-white">${course.level}</span>
                <div class="rounded px-2 py-1 bg-white text-darkblue">
                    <i class="far fa-bookmark"></i>
                </div>
            </div>
        </div>
        <img src="../content/image_icon/no-image.jpg" class="card-img-top" alt="...">
        <div class="card-body px-3">
            <div class="d-flex align-items-center text-yellow">
                <i class="fas fa-star mr-1"></i>
                <i class="fas fa-star mr-1"></i>
                <i class="fas fa-star mr-1"></i>
                <i class="fas fa-star mr-1"></i>
                <i class="fas fa-star mr-1"></i>    
                <span class="text-darkblue font-weight-light ml-1">${course.rate.toFixed(2)} (${course.rate_quantity})</span>
            </div>
            <h5 class="card-title text-darkblue py-2 font-weight-bold">${course.name}</h5>
            <div class="d-flex align-items-center text-gray">
                <i class="far fa-user mr-1"></i>
                <span>${course.total_enrolled}</span>
                <i class="far fa-clock ml-2 mr-1"></i>
                <span>${course.duration}</span>
            </div>
            <div class="d-flex align-items-center text-gray py-2">
                <img src="../content/image_icon/default-teacher-avatar.png" alt="" width="30" height="30" class="rounded-circle">
                <div class="ml-2">by <span class="text-darkblue">${course.teacher}</span> in <span class="text-darkblue">${course.categories}</span></div>
            </div>
        </div>
        <div class="d-flex justify-content-between align-items-center py-2 px-3 border-top">
            <span class="text-darkblue font-weight-bold">Free</span>
            <div>
                <i class="fas fa-shopping-cart text-yellow"></i>
                <span class="text-gray font-weight-bold">Add to Cart</span>
            </div>
        </div>
    </div>
</div>`;
        $('#courseSlider').append(card);
    };
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
}

function addSlider() {
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
}