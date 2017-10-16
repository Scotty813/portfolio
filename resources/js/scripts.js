$(document).ready(function() {
    /* Smooth Scrolling */
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        }
    });
    
    //Animations on scrolling
    $('.js-work').waypoint(function(direction) {
        $('.js-work').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });
    
    $('.js-contact').waypoint(function(direction) {
        $('input[type=submit]').addClass('animated rubberBand');
    }, {
        offset: '20%'
    });
    
    //clears form input
    function clearInput() {
        $("#myForm :input").each(function() {
            //checks all input that arent a sum
           if (!($(this).hasClass("sub"))) {
                 $(this).val('');
           } else
               $(this).val("Thanks!");
        });
    }
    
        $('#myForm').submit(function() {
            var name = $("#name").val();
            var email = $("#email").val();
            var message = $("#message").val();
            
            $.ajax({
                type: 'POST',
                url: 'http://scotthornweb.com/form.php',
                data: { name: name, 
                        email: email,
                        message: message },
                success: clearInput()
            });
            return false;
        }); 
    
    
});
























