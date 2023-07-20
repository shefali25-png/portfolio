$(document).ready(function() {
    var previousScroll = 0;

    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();

        if (currentScroll > previousScroll) {
            $(".navbar").addClass("navbar-hide");
        } else {
            $(".navbar").removeClass("navbar-hide");
        }
        previousScroll = currentScroll;
    });
});