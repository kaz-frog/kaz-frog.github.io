// Carousel
$('#quotes').slick();

// Burger Menu
function toggleMobileMenu() {
  var el = $('#nav-sticky');
  if (el.hasClass('expanded')) {
    el.removeClass('expanded');
  } else {
    el.addClass('expanded');
  }
}

function shrinkMobileMenu() {
  var el = $('#nav-sticky');
  if (el.hasClass('expanded')) {
    el.removeClass('expanded');
  }
}

// ***************************
// ********* Scroll **********
// ***************************
$(document).ready(function () {
    $(document).on("scroll", onScroll);

    var scrollPos = $(document).scrollTop();
    if (scrollPos < 10) {
      $('#nav-sticky').addClass('transparent');
    } else {
      $('#nav-sticky').removeClass('transparent');
    }

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });

        $('#nav-sticky').removeClass('transparent');
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();

    if (scrollPos < 10) {
      $('#nav-sticky').addClass('transparent');
    } else {
      $('#nav-sticky').removeClass('transparent');
    }

    $('#nav-sticky .nav-content').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - 300 <= scrollPos && refElement.position().top - 300 + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}
