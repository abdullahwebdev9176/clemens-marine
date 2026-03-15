

if ($('.gallery-carousel').length) {

    $('.gallery-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    })

};


$(document).ready(function() {

    $('.video-gallery-img').on('click', function() {

        var video = $(this).find('video').get(0);
        var $container = $(this);

        if (video.paused) {

            $('video').each(function() {
                this.pause();
                $(this).closest('.video-gallery-img').removeClass('is-playing');
            });

            video.play();
            $container.addClass('is-playing');
        } else {

            video.pause();
            $container.removeClass('is-playing');
        }
    });

    $('video').on('ended', function() {
        $(this).closest('.video-gallery-img').removeClass('is-playing');
    });
});