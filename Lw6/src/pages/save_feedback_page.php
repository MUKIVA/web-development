<?php
function validFormParam(): void
{
    $name = preg_match("/^[а-я А-Я A-Z a-z]+$/", getPostParameter('name')) ? getPostParameter('name') : '';
    $email = filter_var(strtolower(getPostParameter('email')), FILTER_VALIDATE_EMAIL) ? strtolower(getPostParameter('email')) : '';
    $country = getPostParameter('country') === '-' ? '' : getPostParameter('country');
    $gender = getPostParameter('gender') === 'male' ? 'женский' : getPostParameter('gender') === 'female' ? 'мужской' : '';
    $message = getPostParameter('message');
    $completed = true;
    $dataForm = [
        'name' => $name,
        'email' => $email,
        'country' => $country,
        'gender' => $gender,
        'message' => $message,
        'сompleted' => $completed,
        'name_error' => ($name === '') ? 'Некорректное имя' : '',
        'email_error' => ($email === '') ? 'Некорректный email' : '',
        'message_error' => ($message === '') ? 'необходимо ввести сообщение' : '',
    ];
    if ($name === '' or $email === '' or $message === '')
    {
        $dataForm['сompleted'] = false;
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