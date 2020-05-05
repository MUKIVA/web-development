<?php
echo checkIdentifier();

function isNumber($ch)
{
    return ($ch >= '0' and $ch <= '9');
}

function isValidChar($ch)
{
    $validCharString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return ((strpos($validCharString, $ch) !== false) or (isNumber($ch)));
}

function isNotEmptyString($checkString)
{
    return ($checkString != null);
}

function checkIdentifier()
{
    $identifierString = $_GET["identifier"];
    if (isNotEmptyString($identifierString))
    {
        $index = 1;
        if (isNumber($identifierString[0]))
        {
            return "No \n<br> Error: В начале идентификатора не может быть цифры";
        }
        else
        {
            $noError = isValidChar($identifierString[0]);
            while (($index < strlen($identifierString)) and ($noError === true))
            {
                $noError = isValidChar($identifierString[$index]);
                $index++;
            }
            if ($noError)
            {
                return 'Yes';
            }
            else 
            {
                return "No \n<br> Error: Встречен недопустимый символ";
            }
        }

    } 
    else
    {
        return "No \n<br> Error: Пустой идентификатор";
    }

}
?>