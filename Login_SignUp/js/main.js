$(function(){
	$("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 500,
        onStepChanging: function (event, currentIndex, newIndex) { 
            if ( newIndex === 1 ) {
                $('.steps ul').addClass('step-2');
            } else {
                $('.steps ul').removeClass('step-2');
            }
            if ( newIndex === 2 ) {
                $('.steps ul').addClass('step-3');
            } else {
                $('.steps ul').removeClass('step-3');
            }

            if ( newIndex === 3 ) {
                $('.steps ul').addClass('step-4');
                $('.actions ul').addClass('step-last');
            } else {
                $('.steps ul').removeClass('step-4');
                $('.actions ul').removeClass('step-last');
            }
            return true; 
        },
        labels: {
            finish: "Let In Touch ",
            next: "Next",
            previous: "Previous"
        }
    });
    // Custom Steps Jquery Steps
    $('.wizard > .steps li a').click(function(){
    	$(this).parent().addClass('checked');
		$(this).parent().prevAll().addClass('checked');
		$(this).parent().nextAll().removeClass('checked');
    });
    // Custom Button Jquery Steps
    $('.forward').click(function(){
    	$("#wizard").steps('next');
    })
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    })
    // Checkbox
    $('.checkbox-circle label').click(function(){
        $('.checkbox-circle label').removeClass('active');
        $(this).addClass('active');
    })

    $('#signupUser').click(function(){
        
        var firstname = document.getElementById('firstname').value;
        var lastname = document.getElementById('lastname').value;
        var emailaddress = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var confrimpassword = document.getElementById('confrimpassword').value;
        var phonenumber = document.getElementById('phone').value;
        var country = document.getElementById('country').value;
        var postcode = document.getElementById('postcode').value;
        var address = document.getElementById('address').value;
        var city = document.getElementById('city').value;
        $.ajax({
            url: "../Login_Signup/database/saveData.php",
            type: "POST",
            data: {                
                firstname:firstname,
                lastname:lastname,
                emailaddress:emailaddress,
                password:password,
                confrimpassword:confrimpassword,
                phone:phonenumber,
                country:country,
                postcode:postcode,
                address:address,
                city:city
            },success:function(data){
                window.location = "../Login_SignUp/Login/login.php";
            },error:function(err){
                alert("failed");
            }
        })
    })

    
})


