<?php
function validFormParam(): void
{
    $name = preg_match("/^[а-я А-Я A-Z a-z]+$/u", getPostParameter('name')) ? getPostParameter('name') : '';
    $email = filter_var(strtolower(getPostParameter('email')), FILTER_VALIDATE_EMAIL) ? strtolower(getPostParameter('email')) : '';
    $country = getPostParameter('country') === '-' ? '' : (getPostParameter('country') === 'Russia' ? 'Россия' : 'Другое');
    $gender = getPostParameter('gender') === 'female' ? 'женский' : (getPostParameter('gender') === 'male' ? 'мужской' : '');
    $message = getPostParameter('message');
    $dataForm = [
        'name' => $name,
        'email' => $email,
        'country' => $country,
        'gender' => $gender,
        'message' => $message,
        'сompleted' => 1,
        'name_error' => ($name === '') ? 'Некорректное имя' : '',
        'email_error' => ($email === '') ? 'Некорректный email' : '',
        'message_error' => ($message === '') ? 'необходимо ввести сообщение' : '',
    ];
    if ($name === '' || $email === '' || $message === '')
    {
        $dataForm['сompleted'] = 0;
    }
    else
    {
        saveFeedback($dataForm);
    }
    mainPage($dataForm);
}

function dirCheck()
{
    if (file_exists('data'))
    {
        return null;
    }
    else
    {
        return mkdir("data");
    }
}

function saveFeedback(array $args): void
{
    $fInfo = array_diff_key($args, ['сompleted' => true, 'name_error' => '', 'email_error' => '', 'message_error' => '']);
    dirCheck();
    $fInfo = json_encode($fInfo, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    $fInfo = str_replace(['{', '"', '}'], '', $fInfo);
    file_put_contents("data/" . strtolower($args['email']) . ".txt", $fInfo);
}
?>