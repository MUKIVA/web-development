<?php
function removeExtraBlanks(string $text):?string
{
	$textNew = $_GET["text"];
	$textNew = ltrim($textNew);
	$textNew = rtrim($textNew);
	$pos = strpos($textNew, '  ');
	while ($pos !== false)
	{
		$textNew = str_replace('  ', ' ', $textNew);
		$pos = strpos($textNew, '  ');
	};
	return $textNew;
};

echo removeExtraBlanks('str');