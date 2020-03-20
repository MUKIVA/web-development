<?php
function checkIdentifier()
{
	$new_Str = $_GET["identifier"];
	$check_Ind = 'Yes';
	$i = 1;
	if (($new_Str[0] > '0') and ($new_Str[0] < '9'))
	{
		echo ($new_Str[0]." первый символ не может быть цифрой</br>");
		$check_Ind = 'No';		
	};
	while ($i < strlen($new_Str))
	{
		if ((($new_Str[$i] < 'A') or ($new_Str[$i] > 'Z')) and (($new_Str[$i] < '0') or ($new_Str[$i] > '9')) and (($new_Str[$i] < 'a') or ($new_Str[$i] > 'z')))
		{
			$check_Ind = 'No';
			echo ($new_Str[$i]." не может быть символом идентификатора</br>");
		};
		$i++;
	};	
	if ($check_Ind === 'No')
	{
		$new_Str = $new_Str." не может быть идентификатором";
	} else {
		echo "</br>";
		$new_Str = $new_Str." - идентификатор";
	};
	return $new_Str;
};
echo checkIdentifier();
?>