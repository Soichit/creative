<?php

header("Content-type: text/plain");

if(!isset($_GET["date"])) {
	echo "please pass in a date";
} else {
	//$dates = file_get_contents("dates.txt");
	$dates = file("dates.txt", FILE_IGNORE_NEW_LINES);
	header("Content-type: text/plain");
	if ($_GET["date"] == "latest") {
		echo end($dates);
	} else if ($_GET["date"] == "earliest") {
		echo $dates[0];
	} else {
		echo "please specify 'latest' or earliest'";
	}
}
?>