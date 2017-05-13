<?php
# Allison Obourn



header("Content-type: text/plain");

if(!isset($_GET["base"]) || !isset($_GET["exponent"])) {
	print "please pass both a base and an exponent.";
} else {
	$base = $_GET["base"];
	$exp = $_GET["exponent"];

	$result = pow($base, $exp);
	echo $result;
}
?>