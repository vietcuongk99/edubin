let collapseDropdown = document.getElementById('collapseDropdown'),
    btnToggleDropDown = document.getElementById('btnToggleDropDown'),
    secondNav = document.getElementById('secondNav'),
    sticky = secondNav.offsetTop;

function initEvent() {
    window.addEventListener("scroll", onScroll);
    btnToggleDropDown.addEventListener('click', () => {
        collapseDropdown.classList.toggle('d-none');
    });
}

function onScroll() {
    if (window.pageYOffset >= sticky) {
        secondNav.classList.add("sticky-top--custom");
    } else {
        secondNav.classList.remove("sticky-top--custom");
    }
}

initEvent();