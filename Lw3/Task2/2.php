<?php
function checkIdentifier(string $identifier):?string
{
	$strNew = $_GET["identifier"];
	$checkInd = 'Yes';
	$i = 1;
	if (($strNew[0] > '0') and ($strNew[0] < '9'))
	{
		echo ($strNew[0]." первый символ не может быть цифрой</br>");
		$checkInd = 'No';		
	};
	while ($i < strlen($strNew))
	{
		if ((($strNew[$i] < 'A') or ($strNew[$i] > 'Z')) and (($strNew[$i] < '0') or ($strNew[$i] > '9')) and (($strNew[$i] < 'a') or ($strNew[$i] > 'z')))
		{
			$checkInd = 'No';
			echo ($strNew[$i]." не может быть символом идентификатора</br>");
		};
		$i++;
	};	
	if ($checkInd === 'No')
	{
		$strNew = $strNew." не может быть идентификатором";
	} else {
		echo "</br>";
		$strNew = $strNew." - идентификатор";
	};
	return $strNew;
};
echo checkIdentifier('');
?>