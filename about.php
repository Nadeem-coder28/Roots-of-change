<?php

$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$email = $data['email'];
$message = $data['message'];

$to = 'nadeemlife28@gmail.com';
$subject = 'New Contact Form Submission';
$message_body = "Name: $name\nEmail: $email\n\n$message";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $message_body, $headers)) {
    http_response_code(200);
    echo json_encode(array("message" => "Message sent successfully!"));
} else {
    http_response_code(500);
    echo json_encode(array("message" => "An error occurred, please try again later."));
}
?>
