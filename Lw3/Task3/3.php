<?php
function passwordStrength():?int
{
	$password = $_GET["password"]; 
	$safety = 0; // Надежность
	$digit = 0;  // Кол-во цифр
	$upper_Сase = 0;  // Верхний регистр 
	$lower_Сase = 0;  // Нижний регистр
	$list = '';
	$i=0;
	while ($i < strlen($password))
	{
		$safety = $safety + 4;
		if (($password[$i] >= '0') and ($password[$i] <= '9'))
		{
			$safety = $safety + 4;
			$digit++;
		}			
		if (($password[$i] >= 'A') and ($password[$i] <= 'Z'))
			$upper_Сase++;
		if (($password[$i] >= 'a') and ($password[$i] <= 'z'))
			$lower_Сase++;
		if ((substr_count($password, $password[$i]) > 1) and (strpos($list, $password[$i]) === false))
			$safety = $safety - (substr_count($password, $password[$i]));
		$list = $list.$password[$i];
		$i++;		
	};
	if ($upper_Сase > 0)
		$safety = $safety + ((strlen($password) - $upper_Сase)*2);
	if ($lower_Сase > 0)
		$safety = $safety + ((strlen($password) - $lower_Сase)*2);
	if ($digit === 0) 
		$safety = $safety - strlen($password);
	if (($upper_Сase === 0) and ($lower_Сase === 0))
		$safety = $safety - strlen($password);
	return ($safety);
};
echo passwordStrength();
?>