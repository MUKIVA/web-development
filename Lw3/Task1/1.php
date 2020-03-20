<?php
function removeExtraBlanks()
{
	$text_New = $_GET["text"];
	$text_New = trim($text_New);
	$pos = strpos($text_New, '  ');
	while ($pos !== false)
	{
		$text_New = str_replace('  ', ' ', $text_New);
		$pos = strpos($text_New, '  ');
	};
	return $text_New;
};
echo removeExtraBlanks();
?>