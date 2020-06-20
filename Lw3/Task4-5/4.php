<?php
function dirCheck()
{
    return (file_exists("./Data/")) ? null : mkdir("./Data/");
}

function unsetVoid($data)
{
    while (array_search('', $data) != false)
    {
        unset ($data[array_search('', $data)]);
    }
    return $data;
}

function getParamValue(string $paramName)
{
    return (isset($_GET[$paramName])) ? $_GET[$paramName] : '';
}

function setInfo($data)
{
    $info = "";
    foreach ($data as $key => $value)
    {
        $info = $info . $key . ': ' . $value . "\n";
    }
    return $info;
}

function surveySaver()
{
    dirCheck();
    if (empty($_GET["email"])) return 'ERROR: Параметр email обязателен!';
    
    $data = [
        'email' => getParamValue('email'),
        'first_name' => getParamValue('first_name'),
        'last_name' => getParamValue('last_name'),
        'age' => getParamValue('age')
    ];
    if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) return "ERROR: Некорректный email";
    $data = unsetVoid($data);
    $fInfo = "";
    $fInfo = setInfo($data);
    file_put_contents('./Data/' . $data['email'] . '.txt', $fInfo);
    return "Успех!";
}
echo surveySaver();