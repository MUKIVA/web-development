<?php
function surveyInfo()
{
	$file_Name = $_GET["file_name"];
	if (($file_Name !== null) and ($file_Name !== ''))
	{
		$f = fopen("Data/$file_Name.txt", "r");
		
		$file_length = fileSize("Data/$file_Name.txt");
		$file_str = fread($f, $file_length);
		$file_str = str_replace(" ", "", $file_str);
		$file_str = ' '.str_replace("\r", " ", $file_str).' ';
		$list = array("First name:", "Last name:", "Age:", "email:");
		$list1 = array($first_name, $last_name, $age, $email);
		$list2 = array('First_name', 'Last_name', 'Age', 'Email');
		$i = 0;
		while ($i !== count($list1))
		{
			$list1[$i] = $file_str;
			$find_Str = $list2[$i];
			if (strpos($file_str, $find_Str) != false)
			{
				$list1[$i] = strstr($list1[$i], $list2[$i]);
				$list1[$i] = strstr($list1[$i], ":");
				$list1[$i] = substr($list1[$i], 1, strpos($list1[$i], ' '));
			} else {
				$list1[$i] = ' ';
			};			
			echo nl2br("$list[$i] "."$list1[$i]"."\r");
			$i++;
		};
	};
};
surveyInfo();
?>