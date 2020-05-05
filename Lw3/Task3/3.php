<?php
echo passwordStrength();

function allUpperCaseLetterSafety($CheckString)
{
    $upperCaseSafety = 0;
    $index = 0;
    $strLength = strlen($CheckString);
    while ($index <= $strLength)
    {
        if (($CheckString[$index] >= 'A') and ($CheckString[$index] <= 'Z'))
        {
            $upperCaseSafety++;
        }
        $index++;
    }
    if ($upperCaseSafety !== 0)
    {
        $upperCaseSafety = ($strLength - $upperCaseSafety) * 2;
    }
    return $upperCaseSafety;
}

function allLowerCaseLetterSafety($CheckString)
{
    $lowerCaseSafety = 0;
    $index = 0;
    $strLength = strlen($CheckString);
    while ($index <= $strLength)
    {
        if (($CheckString[$index] >= 'a') and ($CheckString[$index] <= 'z'))
        {
            $lowerCaseSafety++;
        }
        $index++;
    }
    if ($lowerCaseSafety !== 0)
    {
        $lowerCaseSafety = ($strLength - $lowerCaseSafety) * 2;
    }
    return $lowerCaseSafety;
}

function allDigitSafety($CheckString)
{
    $digitSafety = 0;
    $checkDigitString = '1234567890';
    for ($digit = 0; $digit <= 9; $digit++)
    {
        $digitSafety = $digitSafety + (4 * substr_count($CheckString, $checkDigitString[$digit]));
    }
    return $digitSafety;
}

function allCharSafety($CheckString)
{
    return (4 * strlen($CheckString));
}

function onliLetterFine($CheckString)
{
    if (allDigitSafety($CheckString) === 0)
    {
        return strlen($CheckString);
    }
    else
    {
        return 0;
    }
}

function onliDigitFine($CheckString)
{
    if ((allUpperCaseLetterSafety($CheckString) === 0) and (allLowerCaseLetterSafety($CheckString) === 0))
    {
        return strlen($CheckString);
    }
    else
    {
        return 0;
    }
}

function repeatCharactersFine($CheckString)
{
    $fine = 0; 
    $validCharString = '123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for ($validCharIndex = 0; $validCharIndex < strlen($validCharString); $validCharIndex++)
    {
        if (substr_count($CheckString, $validCharString[$validCharIndex]) > 1)
        {
            $fine = $fine + substr_count($CheckString, $validCharString[$validCharIndex]);
        }
    }
    return $fine;
}

function passwordStrength()
{
    $safety = 0;
    $parametrString = $_GET["password"];
    if (empty($parametrString))
    {
        return 'Error: Параметр password не задан';
    }
    else
    {
         $safety = $safety + allCharSafety($parametrString);
         $safety = $safety + allDigitSafety($parametrString);
         $safety = $safety + allUpperCaseLetterSafety($parametrString);
         $safety = $safety + allLowerCaseLetterSafety($parametrString);
         $safety = $safety - onliLetterFine($parametrString);
         $safety = $safety - onliDigitFine($parametrString);
         $safety = $safety - repeatCharactersFine($parametrString);
    }
    return $safety;
}
?>