/* Preloader / Window Loader */

$(window).on('load', function () {
    'use strict'

    // Fadeout Preloader
    $('#preloader').fadeOut();

    // Add Attribute for Hero Content Animation
    $('.kx-hero-content-inner').attr('uk-scrollspy', 'cls: uk-animation-slide-bottom-small; target: .animation; delay: 100;');
});


$(function(){
    'use strict'

/* Scrollspy Navbar */

    $(window).scroll(function (event) {
        // Get scroll top offset
        var scrollTop = $(this).scrollTop();
        if(scrollTop >= 300) {
            // Enable navbar scroll spy
            UIkit.scrollspyNav('#navbar-scrollspy', {
                closest: 'li',
                scroll: true,
                overflow: false,
                offset: 60
            });
        }
    })


    // Works Sections Owl Carousel 2 Options
    $('.kx-works .owl-carousel').owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        autowidth: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    // Clients Sections Owl Carousel 2 Options
    $('.kx-clients .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autowidth: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    });

    // Testimonials Sections Owl Carousel 2 Options
    $('.kx-testimonials .owl-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        autowidth: false,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


/* Web3Forms Contact Form - Web4forms rewrite */

    $(document).on('submit', '#contact_form', function (e) {
        e.preventDefault();

        var form = document.getElementById('contact_form');
        var formData = new FormData(form);

        $('#btn_submit').addClass('uk-hidden');
        $('#btn_sending').removeClass('uk-hidden');
        $('#form_success').addClass('uk-hidden');
        $('#form_error').addClass('uk-hidden');

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(function(response) { return response.json(); })
        .then(function(data) {
            $('#btn_submit').removeClass('uk-hidden');
            $('#btn_sending').addClass('uk-hidden');
            if (data.success) {
                $('#form_success').removeClass('uk-hidden');
                form.reset();
            } else {
                $('#form_error').removeClass('uk-hidden');
            }
        })
        .catch(function() {
            $('#btn_submit').removeClass('uk-hidden');
            $('#btn_sending').addClass('uk-hidden');
            $('#form_error').removeClass('uk-hidden');
        });
    });

})

/* Get Cloudinary Images */
function getImageList(imageTag) {
      var imageAPI = "https://res.cloudinary.com/kimmaxgwp";
      var imageTag = document.getElementById("imageTag").value;
      $("#images").empty();
      $.getJSON( imageAPI + "/image/list/" + imageTag + ".json", {})
        .done(function(data) {
          $.each(data.resources, function( i, resources) {
            $( "<img>" ).attr( "src", imageAPI + "/" + resources.public_id + "." + resources.format).appendTo( "#images" );
            if ( i === 12 ) {
              return false;
            }
          });
        });
}

/* Get Cloudinary Images */
function getKeyImage(imageTag) {
      var imageAPI = "https://res.cloudinary.com/kimmaxgwp";
      $.getJSON( imageAPI + "/image/list/" + imageTag + ".json", {})
        .done(function(data) {
          $.each(data.resources, function( i, resources) {
            $( "<img>" ).attr( "src", imageAPI + "/" + resources.public_id + "." + resources.format).append( "#images" );
            if ( i === 1 ) {
              return false;
            }
          });
        });
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};


function loadPage(pageLib, pageID) {
    $('#mainContent').load("content/" + pageLib + "/" + pageID);
};

function loadModal(pageLib, pageID) {
    $('#holderModal').load("content/" + pageLib + "/" + pageID);
};


function browserBack() {
    window.history.back();
};

function browserForward() {
    window.history.forward();
};
