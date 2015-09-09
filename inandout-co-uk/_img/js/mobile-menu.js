$(document).ready(function () {

    var menu_up = 'notUp';
    $(".menu_button").on("click", function () {
        if (menu_up === 'notUp') {
            $(".mobile-menu").fadeIn(200);
            $(this).addClass("is-open");
            $('body').addClass("menu_up");

            menu_up = 'up';
        } else {
            $(".mobile-menu").fadeOut(200);
            $(".mobile-menu li").find("ul").fadeOut(200);
            $(this).removeClass("is-open");
            $("body").removeClass("menu_up");
            menu_up = 'notUp';
           
        }
    });
    $(window).on('resize', function () {
        $(".mobile-menu").fadeOut();
        $(".mobile-menu li").find('ul').fadeOut(200);
        $(".menu_button").removeClass("is-open");
        $("body").removeClass("menu_up");
        menu_up = 'notUp';
    });







});
