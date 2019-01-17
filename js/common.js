$(document).ready(function() {
    $('.navbar-toggle').click(function() {
        $('#navbar-main').toggleClass('in');
        $('.header').toggleClass('menu-open');
        return false;
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > 60) {
            $('.header').addClass('header_fix');
        } else {
            $('.header').removeClass('header_fix');
        }
    });

    setTimeout(function() {
        $('select').styler();
    }, 100);
    $('.btn').on('mouseenter', function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('.btn__hover-effect').css({
            top: relY,
            left: relX
        })
    }).on('mouseout', function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('.btn__hover-effect').css({
            top: relY,
            left: relX
        })
    });
    $('.popular__more a').on('click', function() {
        $("html, body").animate({
            scrollTop: $('#service').offset().top
        }, 800);
        return false;
    });
    $('[data-scroll]').on('click', function() {
        var elem = $(this).attr('data-scroll');
        $("html, body").animate({
            scrollTop: $(elem).offset().top
        }, 800);
        return false;
    });
    $('.counter__control').on('click', function() {
        var counterValue = $(this).parent('.counter').find('.counter__input').val() * 1;
        if ($(this).hasClass('counter__control_plus')) {
            counterValue = counterValue + 1;
        } else if ($(this).hasClass('counter__control_minus') && counterValue > 1) {
            counterValue = counterValue - 1;
        }
        $(this).parent('.counter').find('.counter__input').val(counterValue);
        if ($(this).closest('.basket__table').length) {
            calculate_cart();
        }
    });
    $('.modal').on('hidden.bs.modal', function() {
        if ($(".modal:visible").length > 0) {
            setTimeout(function() {
                $('body').addClass('modal-open');
            }, 200)
        }
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > $(window).height()) {
            $('.toUp').fadeIn(500);
        } else {
            $('.toUp').fadeOut(500);
        }
    });
    $('.toUp a').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $('.order__delivery-item > input[type="radio"]').on('change', function() {
        $(this).parent().find(' > label a[data-toggle="collapse"]').trigger('click');
    });
    $('.otherservices__price').on('click', function() {
        var child = $(this).closest(".otherservices__item").find('.list_service');
        if (child.css('display') == 'none') {
            $(this).addClass('open');
            child.show();
        } else {
            child.hide();
            $(this).removeClass('open');
        }
    });
    $('a[href^="#"]').on('click', function(e) {
        var target = this.hash;
        if ($(this).attr('data-parent') == '#accordion') {
            return true;
        }
        if (target) {
            var $target = $(target);
            $('.slides li').removeClass('active');
            $target.addClass('active');
            return false;
        }
    });
    $('.service_btn').on('click', function(e) {
        $('#service_id').val($('#serviceSelect').val());
    });
    $('#repairModal').on('hide.bs.modal', function() {
        $('#service_id').val('0');
    });

}); //END READY
