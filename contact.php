<?php
header('Content-Type: application/json; charset=UTF-8');

const RECAPTCHA_SECRET_KEY = '6Lfi8_EsAAAAAFX5ajdmazv40r03kC4xlnWyN7XD';
const MAIL_TO = 'info@shadiqur.com';
const MAIL_FROM = 'noreply@shadiqur.com';

function json_response(bool $success, string $message, int $status = 200): void
{
    http_response_code($status);
    echo json_encode([
        'success' => $success,
        'message' => $message,
    ]);
    exit;
}

function verify_recaptcha(string $token): bool
{
    if ($token === '') {
        return false;
    }

    $postData = http_build_query([
        'secret' => RECAPTCHA_SECRET_KEY,
        'response' => $token,
        'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
    ]);

    $verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';

    if (function_exists('curl_init')) {
        $ch = curl_init($verifyUrl);
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $postData,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 10,
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/x-www-form-urlencoded',
            ],
        ]);
        $response = curl_exec($ch);
        curl_close($ch);
    } else {
        $context = stream_context_create([
            'http' => [
                'method' => 'POST',
                'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
                'content' => $postData,
                'timeout' => 10,
            ],
        ]);
        $response = file_get_contents($verifyUrl, false, $context);
    }

    if ($response === false) {
        return false;
    }

    $data = json_decode($response, true);
    return is_array($data) && !empty($data['success']);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(false, 'Invalid request method.', 405);
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');
$captcha = $_POST['g-recaptcha-response'] ?? '';

if ($name === '' || $email === '' || $message === '') {
    json_response(false, 'Please fill in your name, email, and message.', 422);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    json_response(false, 'Please enter a valid email address.', 422);
}

if (!verify_recaptcha($captcha)) {
    json_response(false, 'Please complete the reCAPTCHA check.', 422);
}

$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safeSubject = $subject !== '' ? htmlspecialchars($subject, ENT_QUOTES, 'UTF-8') : 'Portfolio contact';
$cleanMessage = str_replace(["\r\n", "\r"], "\n", $message);

$mailSubject = 'New Portfolio Contact Message: ' . $safeSubject;
$mailBody = "Name: {$safeName}\n";
$mailBody .= "Email: {$email}\n";
$mailBody .= "Subject: {$safeSubject}\n\n";
$mailBody .= "Message:\n{$cleanMessage}\n";

$headers = [
    'From: ' . MAIL_FROM,
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

if (!mail(MAIL_TO, $mailSubject, $mailBody, implode("\r\n", $headers))) {
    json_response(false, 'Message could not be sent. Please try again later.', 500);
}

json_response(true, 'Your message has been sent successfully.');
