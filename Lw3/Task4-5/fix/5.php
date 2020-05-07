<?php

function emailCheck($email)
{   
    if (file_exists("./data/$email.txt"))
    {
        return (strpos($email, '@') > 1);
    }
    else
    {
        return false;
    }
}

function getParamString($email)
{
    $f = $f = fopen("./data/$email.txt", "r");
    $parStr = fread($f, filesize("./data/$email.txt"));
    fclose($f);
    return $parStr;
}

function getParamValue($findPar, $parStr)
{
    if (strripos($parStr, $findPar) === false)
    {
        return ' ';
    }
    else
    {
        $value = substr($parStr,  strripos($parStr, $findPar));
        $value = substr($value, strpos($value, ':') + 1, strpos($value, "\n") - strpos($value, ':'));
        return $value;
    }
}


function surveyInfo()
{
    $emailString = $_GET["email"];
    if (empty($emailString))
    {
        return 'Error: Параметр email обязателен';
    }
    else
    {
        if (emailCheck($emailString))
        {
            $paramString = getParamString($emailString);
            $resultString = $resultString.'Email:'.getParamValue("email", $paramString);
            $resultString = $resultString.'First name:'.getParamValue("first_name", $paramString);
            $resultString = $resultString.'Last name:'.getParamValue("last_name", $paramString);
            $resultString = $resultString.'Age:'.getParamValue("age", $paramString);
            return nl2br($resultString);
        }
        else
        {
            return 'Error: Некорректный email или фаил не найден';
        }
    }
}
echo surveyInfo();
?>