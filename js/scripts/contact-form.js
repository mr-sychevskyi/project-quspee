$(function () {
    var form = $('.contact-form');
    var snackbar = $('.snackbar');

    $(form).submit(function (e) {
        e.preventDefault();

        var formData = form.serialize();
        var formInput = form.find('.form-group__input');

        $.ajax({
            type: 'POST',
            url: form.attr('action') || './php/contact.php',
            data: formData,

            beforeSend: function (data) {
                form.find('button[type="submit"]').attr('disabled', true);
            },
            success: function (data) {
                if (data['error']) {
                    console.log(data['error']);
                } else {
                    snackbar.addClass('show');
                    formInput.val('');

                    setTimeout(function () {
                        toggleModal('contact-form');
                        snackbar.removeClass('show')
                    }, 5000);
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            },
            complete: function (data) {
                form.find('button[type="submit"]').prop('disabled', false);
            }
        });
    });
});
