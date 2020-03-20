<?php
function surveySaver()
{
	$first_name = $_GET["first_name"]; 
    $last_name = $_GET["last_name"];
	$email = $_GET["email"];
	$age = $_GET["age"];
	$first_name = ((($first_name === null) or ($first_name === '')) ? ' ' : $first_name);
	$last_name = ((($last_name === null) or ($last_name === '')) ? ' ' : $last_name);
	$age = ((($age === null) or ($age === ''))? ' ' : $age);
	if (($email !== null) and ($email !== ''))
	{
		$f = fopen("Data/$email.txt", "w");
		$str = ((($first_name !== null) and ($first_name !== ' ')) ? "$str"."First_name: $first_name\r" : $str);
		$str = ((($last_name !== null) and ($last_name !== ' ')) ? "$str"."Last_name: $last_name\r" : $str);
		$str = ((($age !== null) and ($age !== ' ')) ? "$str"."Age: $age\r" : $str);
		$str = ((($email !== null) and ($email !== ' ')) ? "$str"."Email: $email\r" : $str);
		fwrite($f, $str);	
		fclose($f);	
	} else {
		$f = fopen("Data/$email.txt", "w");
	    fwrite($f, "Email не указан");
		fclose($f);
	};
	return ($first_name);
};
surveySaver();
?>