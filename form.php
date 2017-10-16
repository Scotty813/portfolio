<?php 

    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $servername = "localhost";
    $username = "shorn";
    $password = "Drumline1!";
    $database = "myPortfolioDB";


    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

    $sql = "INSERT INTO contact (name, email, message) VALUES ('$name', '$email', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();

?>