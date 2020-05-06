<?php
function dirCheck()
{
    if (file_exists("./Data/"))
    {
        return null;
    }
    else
    {
      return mkdir("./Data/");
    }
}

function writeErrorLog($errorString)
{
    $f = fopen("Data/errorlog.txt", "a");
    fwrite($f, "$errorString \n");
    fclose($f);
}

function writeParametr($parString, $email)
{
    $parametr = $_GET["$parString"];
    if (empty($parametr))
    {
        writeErrorLog("Warning: Отстутствует параметр $parString");
    }
    else
    {
        $f = fopen("Data/$email.txt", "a");
        fwrite($f, "$parString: $parametr\n");
        fclose($f);
    }
}

function emailCheck($email)
{
    if ((strpos($email, '@') > 1) and ((strpos($email, '@gmail.com') != false) or (strpos($email, '@mail.ru') != false) or (strpos($email, '@yandex.ru') != false) or (strpos($email, '@volgatech.net') != false)))
    {
        $f = fopen("Data/$email.txt", "w");
        fwrite($f, '');
        fclose($f);
        return true;
    }
    else
    {
        return false;
    }
}
function surveySaver()
{
    dirCheck();
    $emailString = $_GET["email"];
    if (empty($emailString))
    {
        writeErrorLog('Error: Параметр email обязателен');
    }
    else
    {   
        if (emailCheck($emailString))
        {
            writeParametr("email", $emailString);
            writeParametr("first_name", $emailString);
            writeParametr("last_name", $emailString);
            writeParametr("age", $emailString);
        }
        else
        {
            writeErrorLog('Error: Некорректный email');
        }

    }
}
echo surveySaver();
?>