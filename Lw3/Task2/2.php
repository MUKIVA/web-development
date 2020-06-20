<?php
echo checkIdentifier();

function isNumber($ch)
{
    return ($ch >= '0' and $ch <= '9');
}

function isValidChar($ch)
{
    return preg_match("/[a-zA-Z0-9]/", $ch);
}

function checkIdentifier()
{
    if (empty($_GET["identifier"])) return nl2br("No \n ERROR: Пустой идентификатор!");
    $identifierString = $_GET["identifier"];
    $index = 1;
    if (isNumber($identifierString[0]))
    {
        return nl2br("No \n ERROR: В начале идентификатора не может быть цифры!");
    }
    else
    {
        $noError = isValidChar($identifierString[0]);
        while (($index < strlen($identifierString)) and ($noError == true))
        {
            $noError = isValidChar($identifierString[$index]);
            $index++;
        }
        return ($noError) ? 'Yes' : nl2br("No \n ERROR: Встречен недопустимый символ!");
    } 
}
?>