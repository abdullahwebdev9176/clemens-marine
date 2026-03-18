

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

    // $('.boat-listing-carousel').owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     nav: false,
    //     dots: false,
    //     responsive: {
    //         0: {
    //             items: 1
    //         }
    //     }
    // })


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

    $(".memoriesCarousel").length && $(".memoriesCarousel").owlCarousel({
        loop: !0,
        margin: 8,
        nav: !1,
        dots: !1,
        responsive: {
            0: {
                items: 2,
                margin: 4
            },
            500: {
                items: 3,
                margin: 4
            },
            600: {
                items: 3
            },
            900: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })

    $(".arrival-invetory-slider").length && $(".arrival-invetory-slider").owlCarousel({
        loop: !0,
        margin: 8,
        nav: !1,
        dots: !1,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            767: {
                items: 3
            }
        }
    })

});



$(document).ready(function () {

    $('.toggle-mega-menu').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        let $target = $('#' + $(this).data('title'));

        $('.inventory-mega-menu-wrapper, .outboard-mega-menu, .location-dropdown').not($target).slideUp();

        $target.slideToggle();
    });

    $('.location-dropdown-item').on('click', function (e) {
        e.stopPropagation();

        $('.inventory-mega-menu-wrapper, .outboard-mega-menu').slideUp();

        $('.location-dropdown').slideToggle();
    });

    $('.location-dropdown ul li').on('click', function () {
        $('.location-name-text').text($(this).find('.dropdown-location-name').text() + ' Location');
        $('.location-number').text($(this).find('.dropdown-location-number').text());
        $('.location-dropdown').slideUp();
    });

    $(document).on('click', function (e) {
        const $target = $(e.target);

        if (!$target.closest('.toggle-mega-menu, .mega-menu-parent').length) {
            $('.inventory-mega-menu-wrapper, .outboard-mega-menu').slideUp();
        }

        if (!$target.closest('.location-dropodown-wrapper').length) {
            $('.location-dropdown').slideUp();
        }
    });

    $('.close-mega-menu').on('click', function () {
        $(this).closest('div[id]').slideUp();
    });
});

$(document).ready(function () {
    function handleResponsiveLayout() {
        const isMobile = $(window).width() < 992;

        $('.service-content').each(function () {
            const targetId = $(this).attr('id');
            const parentTab = $('[data-target="' + targetId + '"]');

            if (isMobile) {
                // Move content directly after its corresponding tab button
                $(this).insertAfter(parentTab);
                // Show content if tab is active, hide otherwise
                $(this).toggleClass('d-none', !parentTab.hasClass('active'));
            } else {
                // Move content back to the right-side wrapper
                $(this).appendTo('#contentWrapper');
                // On desktop, keep d-none unless active
                $(this).toggleClass('d-none', !parentTab.hasClass('active'));
            }
        });
    }

    // Tab Click Event
    $('.services-tabs .list-group-item').on('click', function () {
        const target = $(this).data('target');

        // Update Active States
        $('.services-tabs .list-group-item').removeClass('active');
        $(this).addClass('active');

        // Toggle Content
        $('.service-content').addClass('d-none');
        $('#' + target).removeClass('d-none');

        // Re-run placement for mobile visibility
        if ($(window).width() < 992) {
            handleResponsiveLayout();
        }
    });

    // Run on load and resize
    $(window).on('resize', handleResponsiveLayout);
    handleResponsiveLayout();
});