const collapseDropdown = $('#collapseDropdown'),
    btnToggleDropDown = $('#btnToggleDropDown'),
    mainNav = $('#mainNav'),
    btnMoveToTop = $('#btnMoveToTop'),
    btnSubmit = $('#btnSubmit'),
    firstName = $('#firstName'),
    lastName = $('#lastName'),
    userName = $('#userName'),
    email = $('#email'),
    password = $('#password'),
    rePassword = $('#rePassword');
const nameRegex = /^[A-Za-z]{8,}/,
    emailRegex = /^[^\s@]+@[^\s@]+$/,
    passwordRegex = /[a-z]{6,20}/;
let validHTML = $(`<div class="valid-input"></div>`),
    invalidHTML = $(`<div class="invalid-input"></div>`);
let timeout = null,
    sticky = $('#mainNav').offset().top;
$(document).ready(function() {
    initEvent();
});

function initEvent() {
    //window scroll event
    $(window).on("scroll", onScroll);
    //toggle dropdown topnav
    btnToggleDropDown.on('click', () => {
        collapseDropdown.toggleClass('d-none');
    });
    //move to top
    btnMoveToTop.on("click", moveToTop);
    //submit form
    btnSubmit.on("click", submitForm);
    //input event
    onInput(firstName, nameValidate);
    onInput(lastName, nameValidate);
    onInput(userName, nameValidate);
    onInput(email, emailValidate);
    onInput(password, passwordValidate);
    onInput(rePassword, rePasswordValidate);
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
//validate input
function nameValidate(name) {
    let validResult = $(`<div class="valid-input"></div>`),
        invalidResult = $(`<div class="invalid-input"></div>`);
    if (name.val() && name.val().trim().length > 0) {
        if (nameRegex.test(name.val().trim())) {
            validResult.html("Tên hợp lệ.");
            name.next().html(validResult);
        } else {
            invalidResult.html("Tên chứa tối thiểu 8 chữ cái.");
            name.next().html(invalidResult);
        }
    } else {
        invalidResult.html("Bạn cần nhập trường này.");
        name.next().html(invalidResult);
    }
}

function emailValidate(email) {
    let validResult = $(`<div class="valid-input"></div>`),
        invalidResult = $(`<div class="invalid-input"></div>`);
    if (email.val()) {
        if (emailRegex.test(email.val().trim())) {
            validResult.html("Email hợp lệ.");
            email.next().html(validResult);
        } else {
            invalidResult.html("Email chưa hợp lệ.");
            email.next().html(invalidResult);
        }
    } else {
        invalidResult.html("Bạn cần nhập trường này.");
        email.next().html(invalidResult);
    }
}

function passwordValidate(password) {
    let validResult = $(`<div class="valid-input"></div>`),
        invalidResult = $(`<div class="invalid-input"></div>`);
    if (password.val()) {
        if (passwordRegex.test(password.val().trim())) {
            validResult.html("Mật khẩu hợp lệ");
            password.next().html(validResult);
        } else {
            invalidResult.html("Mật khẩu chứa 6-20 kí tự.");
            password.next().html(invalidResult);
        }
    } else {
        invalidResult.html("Bạn cần nhập trường này.");
        password.next().html(invalidResult);
    }
}

function rePasswordValidate(rePassword) {
    let validResult = $(`<div class="valid-input"></div>`),
        invalidResult = $(`<div class="invalid-input"></div>`);
    if (password.val() && passwordRegex.test(password.val().trim())) {
        if (rePassword.val()) {
            if (rePassword.val().trim() == password.val().trim()) {
                validResult.html("Mật khẩu nhập lại hợp lệ.");
                rePassword.next().html(validResult);
            } else {
                invalidResult.html("Mật khẩu nhập lại chưa đúng.");
                rePassword.next().html(invalidResult);
            }
        } else {
            invalidResult.html("Bạn cần nhập trường này.");
            rePassword.next().html(invalidResult);
        }

    }
}

function onInput(input, condition) {
    input.on("input", () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            condition(input);
        }, 200);
    })
}

function submitForm() {
    nameValidate(firstName);
    nameValidate(lastName);
    emailValidate(email);
    passwordValidate(password);
    rePasswordValidate(rePassword);
    nameValidate(userName);
}