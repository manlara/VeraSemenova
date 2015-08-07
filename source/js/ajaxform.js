$(function() {

    // Get the form.
    var bookform    = $('#bookform');
    var contactform = $('#contactform');

    // Get the messages div.
    var bookformMessages = $('#book-form-messages');
    var contactformMessages = $('#contact-form-messages');

    function request(type,url,params,cb){
        console.log(url)
        $.ajax({
            url: url,
            type: type,
            data:params,
            success: function(result) {
                console.log('success')
                return cb(null,result)
            },
            error:function(err){
                console.log('fail')
                return cb(err)
            }
        });
    }


    $(contactform).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        request('POST',$(contactform).attr('action'),$(contactform).serialize(),function(err,result){
            if (err){
                $(bookformMessages).removeClass('has-success');
                $(bookformMessages).addClass('has-error');

                console.log('Failed: ',err);

                // Set the message text.
                if (err.responseText !== '') {
                    $(bookformMessages).text(data.responseText);
                } else {
                    $(bookformMessages).text('Oops! An error occured and your message could not be sent.');
                }
            } else{
                // Make sure that the formMessages div has the 'success' class.
                $(contactformMessages).removeClass('has-error');
                $(contactformMessages).addClass('has-success');

                // Set the message text.
                $(contactformMessages).text(result);
                console.log('Success: ',result);

                // Clear the form.
                $('#name').val('');
                $('#email').val('');
                $('#message').val('');
            }
        });
    });


    $(bookform).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();
        
        request('POST',$(bookform).attr('action'),$(bookform).serialize(),function(err,result){
            if (err){
                $(bookformMessages).removeClass('has-success');
                $(bookformMessages).addClass('has-error');

                console.log('Failed: ',err);

                // Set the message text.
                if (err.responseText !== '') {
                    $(bookformMessages).text(data.responseText);
                } else {
                    $(bookformMessages).text('Oops! An error occured and your message could not be sent.');
                }
            } else{
                // Make sure that the formMessages div has the 'success' class.
                $(bookformMessages).removeClass('has-error');
                $(bookformMessages).addClass('has-success');

                // Set the message text.
                $(bookformMessages).text(result);
                console.log('Success: ',result);

                // Clear the form.
                $('#name').val('');
                $('#email').val('');
                $('#message').val('');
            }
        });

    });
});