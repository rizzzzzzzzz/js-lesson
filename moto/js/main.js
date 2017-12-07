$(function() {
    // $('.sh-gal').on('click', function(e) {
    //     $('#gallery').slideToggle();
    //     e.preventDefault();
    // });
    // $('#small a').each(function() {
    //     $(this).on('click', function(e) {
    //         var attrLink = $(this).attr('href');
    //         var imgAttr = $('#big img').attr('src');
    //         if (imgAttr != attrLink) {
    //             $('#big img').hide().attr('src', attrLink);
    //         };
    //         $('#big img').on('load', function() {
    //             $(this).fadeIn(1000);
    //         });
    //         e.preventDefault();
    //     });
    //     $('#small a img').on('click', function(e) {
    //         $('#small a img').css({
    //             border: 'none'
    //         });
    //         $(this).css({
    //             border: '2px solid #000'
    //         });
    //     });
    // });

    var emailRes = $('#email');
    var reg = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
    emailRes.focus(function() {
        var emailRes = $('#email');
        if ($('#email').val() == 'Пример: you@site.ru') {
            $(this).val('');
        }
    });
    emailRes.blur(function() {
    	var regN = $(this).val();
        if (regN == '') {
            $(this).val('Пример: you@site.ru').css({
                border: '1px solid #ccc'
            });
        }else if (regN.search(reg) == -1) {
            $(this).css({
                border: '2px solid red'
            });
        }else if (regN.search(reg) == 0) {
            $(this).css({
                border: '2px solid green'
            });
        };
    });
    $('#my_button').on('click', function() {
            $('#my_button').attr('disabled', 'disabled')
    });


});