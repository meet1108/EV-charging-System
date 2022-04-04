$(function(){
    
    $('#signinUser').click(function(){                    
        var emailaddress = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        $.ajax({
            url: "../../Login_SignUp/database/check.php",
            type: "POST",
            data: {                                
                emailaddress:emailaddress,
                password:password
            },success:function(data){                
                if(data=="success"){
                    window.location = "../../Home/home.html";
                }                  
            },error:function(err){
                alert("failed");
            }
        })

    })

})

