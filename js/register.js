const collapseDropdown = $('#collapseDropdown'),
    btnToggleDropDown = $('#btnToggleDropDown'),
    mainNav = $('#mainNav'),
    btnMoveToTop = $('#btnMoveToTop'),
    btnSubmit = $('#btnSubmit'),
    nameRegex = /^[A-Za-z]{2,20}/,
    emailRegex = /^[^\s@]+@[^\s@]+$/,
    passwordRegex = /[a-z]{6,20}/;

let validHTML = $(`<div class="valid-input"></div>`),
    invalidHTML = $(`<div class="invalid-input"></div>`);

let timeout = null;

let sticky = $('#mainNav').offset().top,
    firstName = $('#firstName'),
    lastName = $('#lastName'),
    userName = $('#userName'),
    email = $('#email'),
    password = $('#password'),
    rePassword = $('#rePassword');

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
    btnSubmit.on("click", submitForm);
    //validate input
    firstName.on("focus", onKeyUp(firstName, nameValidate));
    lastName.on("focus", onKeyUp(lastName, nameValidate));
    userName.on("focus", onKeyUp(userName, nameValidate));
    email.on("focus", onKeyUp(email, emailValidate));
    password.on("focus", onKeyUp(password, passwordValidate));
    rePassword.on("focus", onKeyUp(rePassword, rePasswordValidate));


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
    if (name.val()) {
        name.next().html = '';
        if (nameRegex.test(name.val().trim())) {
            let result = $(`<div class="valid-input"></div>`);
            result.html("Tên hợp lệ.");
            name.next().html(result);
        } else {
            let result = $(`<div class="invalid-input"></div>`);
            result.html("Tên chứa tối thiểu 2 chữ cái.");
            name.next().html(result);
        }
    } else {
        let result = $(`<div class="invalid-input"></div>`);
        result.html("Tên chứa tối thiểu 2 chữ cái.");
        name.next().html(result);
    }
}

function emailValidate(email) {
    if (email.val()) {
        email.next().html = '';
        if (emailRegex.test(email.val().trim())) {
            let result = $(`<div class="valid-input"></div>`);
            result.html("Email hợp lệ.");
            email.next().html(result);
        } else {
            let result = $(`<div class="invalid-input"></div>`);
            result.html("Email chưa hợp lệ.");
            email.next().html(result);
        }
    } else {
        let result = $(`<div class="invalid-input"></div>`);
        result.html("Email chưa hợp lệ.");
        email.next().html(result);
    }
}

function passwordValidate(password) {
    if (password.val()) {
        password.next().html = '';
        if (passwordRegex.test(password.val().trim())) {
            let result = $(`<div class="valid-input"></div>`);
            result.html("Mật khẩu hợp lệ");
            password.next().html(result);
        } else {
            let result = $(`<div class="invalid-input"></div>`);
            result.html("Mật khẩu chứa 6-20 kí tự.");
            password.next().html(result);
        }
    } else {
        let result = $(`<div class="invalid-input"></div>`);
        result.html("Mật khẩu chứa 6-20 kí tự.");
        password.next().html(result);
    }
}


function rePasswordValidate(rePassword) {
    if (rePassword.val() && rePassword.val().trim() == password.val().trim()) {
        let result = $(`<div class="valid-input"></div>`);
        result.html("Mật khẩu nhập lại hợp lệ.");
        rePassword.next().html(result);
    } else {
        let result = $(`<div class="invalid-input"></div>`);
        result.html("Mật khẩu nhập lại chưa trùng khớp.");
        rePassword.next().html(result);
    }
}


function onKeyUp(input, condition) {
    input.on("keyup", () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            if (input && input.val()) {
                condition(input);
            }
        }, 200)
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