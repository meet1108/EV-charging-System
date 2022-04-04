<?php
    include_once('../config.php');

    // if(isset($_POST['storedata'])){

        $fname=$_POST['firstname'];
        $lname=$_POST['lastname'];
        $email=$_POST['emailaddress'];
        $pass=$_POST['password'];
        $conpass=$_POST['confrimpassword'];
        $phone=$_POST['phone'];
        $country=$_POST['country'];
        $postcode=$_POST['postcode'];
        $address=$_POST['address'];
        $city=$_POST['city'];
        $sql = "INSERT INTO `tbl_signup`(`firstname`, `lastname`, `email`, `password`, `confirmpassword`, `phone`, `country`, `postcode`, `address`, `city`) 
        VALUES ('$fname','$lname','$email','$pass','$conpass','$phone','$country','$postcode','$address','$city')";
    
        if (mysqli_query($conn, $sql)) {
            echo "done";
        } 
        else {
            echo mysqli_query($conn, $sql);
        }        
    // }

?>