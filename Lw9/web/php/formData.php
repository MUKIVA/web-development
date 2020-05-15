<?php
$dataUser = json_encode(getData());
echo $dataUser;

function getData()
{
    $formData = [
        'name' => preg_match("/^[а-я А-Я a-z A-Z]+$/u", $_POST['name']) ? $_POST['name'] : 'error',
        'email' => filter_var(strtolower($_POST['email']), FILTER_VALIDATE_EMAIL) ? strtolower($_POST['email']) : 'error',
        'message' => $_POST['message'] === '' ? 'error' : $_POST['message'],
        'country' => $_POST['country'],
        'gender' => $_POST['gender']
    ];
    return $formData;
}
?>