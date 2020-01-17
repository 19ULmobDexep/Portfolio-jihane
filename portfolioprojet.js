///=== TypedjS ====/////

var typed = new Typed('.element', {
    strings: ["Batman", "Superman"],
    typeSpeed: 30
})


//// === OWL Carousel ===///

$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1
    })
});


/// === Scroll ===///

$(function() {
    $.scrollIt({
        easing: 'ease', // the easing function for animation
        scrollTime: 1000, // how long (in ms) the animation takes
        topOffset: 0 // offste (in px) for fixed top navigation
    });

});


/*/ ============================== Portfolio Isotope ========================== /*/


$grid = $("#ligne_photo").isotope({
    itemSelector: '.six',
    layoutMode: 'fitRows'

});

$("#all-filter").on("click", function() {
    $grid.isotope({ filter: '*' });
    $(".portfolio_menu").removeClass("active");
    $("#all-filter").addClass("active");
})

$("#js-filter").on("click", function() {
    $grid.isotope({ filter: '.js' });
    $(".portfolio_menu").removeClass("active");
    $("#js-filter").addClass("active");
})

$("#css-filter").on("click", function() {
    $grid.isotope({ filter: '.css' });
    $(".portfolio_menu").removeClass("active");
    $("#css-filter").addClass("active");
})

$("#php-filter").on("click", function() {
    $grid.isotope({ filter: '.php' });
    $(".portfolio_menu").removeClass("active");
    $("#php-filter").addClass("active");
})


$("#burgermenu").click(function() {
    $('#menubis').toggleClass("menu_visible")
})