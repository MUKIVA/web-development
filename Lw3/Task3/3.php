<?php
function passwordStrength(string $password):?int
{
	$strNew = $_GET["password"]; 
	$safety = 0; // Надежность
	$digit = 0;  // Кол-во цифр
	$upperСase = 0;  // Верхний регистр 
	$lowerСase = 0;  // Нижний регистр
	$list = '';
	$i=0;
	while ($i < strlen($strNew))
	{
		$safety = $safety + 4;
		if (($strNew[$i] >= '0') and ($strNew[$i] <= '9'))
		{
			$safety = $safety + 4;
			$digit++;
		}			
		if (($strNew[$i] >= 'A') and ($strNew[$i] <= 'Z'))
			$upperСase++;
		if (($strNew[$i] >= 'a') and ($strNew[$i] <= 'z'))
			$lowerСase++;
		if ((substr_count($strNew, $strNew[$i]) > 1) and (strpos($list, $strNew[$i]) === false))
			$safety = $safety - (substr_count($strNew, $strNew[$i]));
		$list = $list.$strNew[$i];
		$i++;		
	};
	if ($upperСase > 0)
		$safety = $safety + ((strlen($strNew) - $upperСase)*2);
	if ($lowerСase > 0)
		$safety = $safety + ((strlen($strNew) - $lowerСase)*2);
	if ($digit === 0) 
		$safety = $safety - strlen($strNew);
	if (($upperСase === 0) and ($lowerСase === 0))
		$safety = $safety - strlen($strNew);
	return ($safety);
}
echo passwordStrength('');
?>