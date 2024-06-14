// Contoh animasi scroll
$(document).ready(function() {
    $('.cta-button').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });
});
