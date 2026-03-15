// Navigation Bar Mobile Toggle
$(document).ready(function () {
    // Mobile menu toggle
    $('#navbarToggle').on('click', function () {
        $('#navbarMenu').toggleClass('active');
        $(this).toggleClass('active');
    });

    // Close mobile menu when clicking outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.navbar-austin').length) {
            $('#navbarMenu').removeClass('active');
            $('#navbarToggle').removeClass('active');
        }
    });

    // Close mobile menu when clicking on a menu item
    $('.navbar-menu a').on('click', function () {
        if ($(window).width() <= 991) {
            $('#navbarMenu').removeClass('active');
            $('#navbarToggle').removeClass('active');
        }
    });

    // ===================================
    // Inventory Mega Menu Functionality
    // ===================================

    // Toggle mega menu on click
    $('#inventoryMenuTrigger').on('click', function (e) {
        if ($(window).width() > 991) {
            e.preventDefault();
            $('#inventoryMegaMenu').toggleClass('active');
            $('#serviceMegaMenu').removeClass('active');
            $('#locationDropdown').removeClass('active');
            $('#sideMegaMenu').removeClass('active');
            $('#moreMenuTrigger').removeClass('active');
        }
    });

    // Close mega menu when clicking outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('#inventoryMenuTrigger').length &&
            !$(e.target).closest('#inventoryMegaMenu').length) {
            $('#inventoryMegaMenu').removeClass('active');
        }
    });

    // Close mega menu when pressing Escape key
    $(document).on('keydown', function (e) {
        if (e.key === 'Escape') {
            $('#inventoryMegaMenu').removeClass('active');
            $('#serviceMegaMenu').removeClass('active');
            $('#sideMegaMenu').removeClass('active');
            $('#moreMenuTrigger').removeClass('active');
        }
    });

    // Prevent mega menu from closing when clicking inside it
    $('#inventoryMegaMenu').on('click', function (e) {
        e.stopPropagation();
    });

    // ===================================
    // Service & Storage Mega Menu Functionality
    // ===================================

    // Toggle service mega menu on click
    $('#serviceMenuTrigger').on('click', function (e) {
        if ($(window).width() > 991) {
            e.preventDefault();
            $('#serviceMegaMenu').toggleClass('active');
            $('#inventoryMegaMenu').removeClass('active');
            $('#locationDropdown').removeClass('active');
            $('#sideMegaMenu').removeClass('active');
            $('#moreMenuTrigger').removeClass('active');
        }
    });

    // Close service mega menu when clicking outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('#serviceMenuTrigger').length &&
            !$(e.target).closest('#serviceMegaMenu').length) {
            $('#serviceMegaMenu').removeClass('active');
        }
    });

    // Prevent service mega menu from closing when clicking inside it
    $('#serviceMegaMenu').on('click', function (e) {
        e.stopPropagation();
    });

    // ===================================
    // Experiences Mega Menu Functionality
    // ===================================

    // Toggle experiences mega menu on click
    $('#experiencesMenuTrigger').on('click', function (e) {
        if ($(window).width() > 991) {
            e.preventDefault();
            $('#inventoryMegaMenu').removeClass('active');
            $('#serviceMegaMenu').removeClass('active');
            $('#locationDropdown').removeClass('active');
            $('#sideMegaMenu').removeClass('active');
            $('#moreMenuTrigger').removeClass('active');
        }
    });



    // ===================================
    // Mobile Accordion Toggle
    // ===================================
    $('.mobile-toggle').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation(); // Prevent bubbling to li or a

        // Toggle the sub-menu
        $(this).closest('li').find('.mobile-sub-menu').slideToggle(300);

        // Toggle the icon rotation
        $(this).toggleClass('active');
    });

    // ===================================
    // Location Dropdown Functionality
    // ===================================

    // Toggle location dropdown
    $('#locationDropdownTrigger').on('click', function (e) {
        e.stopPropagation();

        // Close other menus if open
        $('#navbarMenu').removeClass('active'); // Close mobile menu
        $('#navbarToggle').removeClass('active');

        // Close mega menus
        $('#inventoryMegaMenu').removeClass('active');
        $('#serviceMegaMenu').removeClass('active');
        $('#sideMegaMenu').removeClass('active');
        $('#moreMenuTrigger').removeClass('active');

        $('#locationDropdown').toggleClass('active');
    });

    // Handle location selection
    $('.location-item:not(.selected)').on('click', function () {
        var newLocation = $(this).data('name');
        // Update the header text
        $('#currentLocationName').text(newLocation);

        // Close dropdown
        $('#locationDropdown').removeClass('active');
    });

    // Close dropdown when clicking outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('#locationDropdownTrigger').length &&
            !$(e.target).closest('#locationDropdown').length) {
            $('#locationDropdown').removeClass('active');
        }
    });

    // Prevent closing when clicking inside dropdown
    $('#locationDropdown').on('click', function (e) {
        e.stopPropagation();
    });

    // ===================================
    // Side Mega Menu (More Button) Functionality
    // ===================================

    // Toggle side mega menu on click
    $('#moreMenuTrigger').on('click', function (e) {
        e.stopPropagation();

        // Close other menus
        $('#navbarMenu').removeClass('active');
        $('#navbarToggle').removeClass('active');
        $('#inventoryMegaMenu').removeClass('active');
        $('#serviceMegaMenu').removeClass('active');
        $('#locationDropdown').removeClass('active');

        // Toggle side menu and button active state
        $(this).toggleClass('active');
        $('#sideMegaMenu').toggleClass('active');
    });

    // Close side mega menu when clicking outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('#moreMenuTrigger').length &&
            !$(e.target).closest('#sideMegaMenu').length) {
            $('#sideMegaMenu').removeClass('active');
            $('#moreMenuTrigger').removeClass('active');
        }
    });

    // Prevent closing when clicking inside side mega menu
    $('#sideMegaMenu').on('click', function (e) {
        e.stopPropagation();
    });

    // Close side menu when pressing Escape key
    $(document).on('keydown', function (e) {
        if (e.key === 'Escape') {
            $('#sideMegaMenu').removeClass('active');
            $('#moreMenuTrigger').removeClass('active');
        }
    });
    // ===================================
    // New Arrivals Carousel
    // ===================================
    if ($('.new-arrivals-carousel').length) {
        $('.new-arrivals-carousel').owlCarousel({
            loop: true,
            margin: 40,
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
                    items: 2.5
                }
            }
        });
    }

    // ===================================
    // Docks Gallery Carousel
    // ===================================
    if ($('.docks-gallery-carousel').length) {
        $('.docks-gallery-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2.5
                }
            }
        });
    }
    $('.brand-carousel').owlCarousel({
        loop: true,
        margin: 64,
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 2 },
            576: { items: 3 },
            768: { items: 4 },
            992: { items: 6 },
            1200: { items: 8 },
            1500: { items: 10.5 }
        }
    });

    $(document).ready(function () {
        $("#arrivals-carousel").owlCarousel({
            center: true,      // Keeps the active card in the middle
            loop: true,        // Infinite loop for smooth "peeking"
            margin: 20,        // Space between cards
            nav: false,
            dots: false,
            stagePadding: 300, // Adjust this value to show more or less of the side cards
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 40 // Smaller peek for mobile
                },
                768: {
                    items: 2,
                    stagePadding: 70
                },
                1200: {
                    items: 3,
                    stagePadding: 200 // Larger peek for desktop
                }
            }
        });
    });

    // ===================================
    // Mobile Footer Accordion
    // ===================================
    $('.footer-col-title').on('click', function () {
        if ($(window).width() <= 991) {
            // Toggle active class on parent
            $(this).closest('.custom-col-5').toggleClass('active');
            // Toggle the list
            $(this).next('.footer-links-list').slideToggle(300);
        }
    });

    // ===================================
    // Reset footer accordion on window resize
    // ===================================
    $(window).on('resize', function () {
        if ($(window).width() > 991) {
            $('.footer-links-list').removeAttr('style');
            $('.custom-col-5').removeClass('active');
        }
    });

});


$(document).ready(function () {

    if ($('.owl-carousel').length) {

        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: false,
            smartSpeed: 800,
            autoplaySpeed: 800,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                },
                1500: {
                    items: 4
                }
            }
        });

    }

    $('.type-boat-card').on('click', function () {
        console.log('Card clicked');
        $(this).toggleClass('active');
    });

    if ($('.gallery-carousel').length) {

        $('.gallery-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        })

    };

});