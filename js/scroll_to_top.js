$(window).scroll(function() {
    if ($(window).scrollTop() > 600) {
        $('#backToTop').addClass('show');
    } else {
        $('#backToTop').removeClass('show');
    }
});

$('#backToTop').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '100');
});