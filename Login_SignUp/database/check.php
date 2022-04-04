<?php
    include_once('../config.php');
    
    $email=$_POST['emailaddress'];
    $pass=$_POST['password'];

    $sql = "SELECT * FROM `tbl_signup` WHERE `email`='$email'";
    
    if(mysqli_num_rows(mysqli_query($conn,$sql))){
        $sql1 = "SELECT * FROM `tbl_signup` WHERE `email`='$email' and `password`='$pass'";
        if(mysqli_num_rows(mysqli_query($conn,$sql1))){
            echo "success";
        }else echo "fail";
    }else{
        echo "invalid";
    }

?>