$(document).ready(function() {

    //высота контента по высоте окна браузера
    if ($(window).width() > 1200) {
        var w_height = $(window).height() - 32;
        $('body').css('min-height', w_height);
        container_height = w_height - 32;
        $('.container').css('min-height', container_height);
    } else
    if ($(window).width() < 1201) {
        var w_height = $(window).height();
        $('body').css('min-height', w_height);
        $('.container').css('min-height', w_height);
    }

    //маска для кода
    $('input[name="personal_code"]').mask('9999');

    //каивация кнопки при вводе кода
    $('#personal_code').change(function() {
        if ("personal_code:not(:empty)") {
            $('#btn_submit').removeAttr('disabled').addClass('active');
        } else {
            $('#btn_submit').attr('disabled').removeClass('active');
        }
    });


    //задержка при отправке формы и входе в систему
    /*$(document).on('submit', '#login_form', function () {
        $('.hello-screen h1:before').css('animation', 'line_right_out 2s forwards;');
        $('.enter-form .flex-box:before').css('animation', 'blue_line_out 2s forwards;');
        var href = 'inner.html';
        setTimeout(function() {window.location = href}, 1000);
        return true;
    });*/

    // $(document).on('click', '#btn_submit', function() {
    //     $('.hello-screen h1').addClass('line_right_out');
    //     $('.enter-form .flex-box').addClass('blue_line_out');
    //     var href = '../inner.html';
    //     setTimeout(function() { window.location = href }, 1000);
    //     return true;
    // });


    // $("#btn_submit").submit(function(e) {
    //     e.preventDefault();
    //     var form_data = $(this).serialize();
    //     $.ajax({
    //         type: "POST",
    //         url: "/success.php",
    //         data: form_data,
    //         success: function() {
    //             console.log("AYE");
    //             alert('Спасибо, Заявка отправлена!'); //То что выводится после успешно отправки
    //             $('#btn_submit')[0].reset(); //скидываем нашу форму
    //         }
    //     });
    // });
    //плавная прокрутка якорных ссылок
    $(document).on('click', '.down', function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({ scrollTop: target.offset().top - 20 }, 1000);
                event.preventDefault();
            }
        }
    })

    //вывод сообщения при клике на кнопки приду/не приду
    $('.btn-link').click(function() {
        $('.btn-link').removeClass('active');
        $(this).addClass('active');
        $("#show_message").hide();
        var mess = $(this).attr('data-visit');
        $("#show_message").html(mess).fadeIn();
    });

    //анимации
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0
    });
    wow.init();
});