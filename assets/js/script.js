

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


$(document).ready(function () {

    $('.video-gallery-img').on('click', function () {

        var video = $(this).find('video').get(0);
        var $container = $(this);

        if (video.paused) {

            $('video').each(function () {
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

    $('video').on('ended', function () {
        $(this).closest('.video-gallery-img').removeClass('is-playing');
    });
});


$(document).ready(function () {
    if ($('.robalo-gallery-carousel').length) {
        $('.robalo-gallery-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: true,
            autoplay: true,
            responsive: {
                0: { items: 1 },
                600: { items: 2 },
                1000: { items: 3 }
            }
        });
    }
});

$(document).ready(function() {

    $('.location-dropdown-item').on('click', function(e) {
        e.stopPropagation();
        $('.location-dropdown').slideToggle(200);
    });

    $('.location-dropdown ul li').on('click', function() {

        let name = $(this).find('.dropdown-location-name').text();
        let phone = $(this).find('.dropdown-location-number').text();

        $('.location-name-text').text(name + ' Location');
        $('.location-number').text(phone);

        $('.location-dropdown').slideUp(200);
    });

    $(document).on('click', function() {
        $('.location-dropdown').slideUp(200);
    });
});