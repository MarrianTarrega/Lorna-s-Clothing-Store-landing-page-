$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // carousel 
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
    });
});