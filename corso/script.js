$(function () {
    var navbar = $("nav");
    var a = $(".nav-link");


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            navbar.removeClass('navbar-bg').addClass("navbar-bgchanged");
            a.removeClass('text-white').addClass("text-dark");

        }
        else {
            navbar.removeClass("navbar-bgchanged").addClass('navbar-bg');
            a.addClass('text-white');
        }
    });
});



function myFunction() {
    var element = document.getElementsByClassName("nav-link");
    element.classList.toggle("text-black");
}