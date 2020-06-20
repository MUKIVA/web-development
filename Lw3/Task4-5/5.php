<?php
function getParamValue($findPar, $parStr)
{
    if (strripos($parStr, $findPar) === false)
    {
        return nl2br("\r\n");
    }
    else
    {
        $value = substr($parStr,  strripos($parStr, $findPar));
        $value = substr($value, strpos($value, ':') + 1, strpos($value, "\n") - strpos($value, ':'));
        return nl2br($value);
    }
}

function formatInfo($array)
{
    $infoString = "";
    foreach ($array as $key => $value)
    {
        $infoString = $infoString . $key . ": " . $value;
    }
    return $infoString;
}

function surveyInfo()
{
    if (empty($_GET["email"])) return 'Error: Параметр email обязателен';
    $emailString = $_GET["email"];
    if (!filter_var($emailString, FILTER_VALIDATE_EMAIL)) return 'Error: Некорректный email';
    if (!file_exists("./data/$emailString.txt")) return 'Error: фаил не найден';
    $paramString = file_get_contents("./data/$emailString.txt");
    $array = [
        'Email' =>  getParamValue("email", $paramString),
        'First name' => getParamValue("first_name", $paramString),
        'Last name' => getParamValue("last_name", $paramString),
        'Age' => getParamValue("age", $paramString)
    ];
    $resultString = formatInfo($array);
    return $resultString;
}
echo surveyInfo();
?>