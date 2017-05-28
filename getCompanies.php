

<?php
header("Content-type: application/json");

try {
	$db = new PDO("mysql:dbname=cse154;host=localhost", "root",
	"");
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$rows = $db->query("SELECT * FROM Companies ORDER BY ordering");

	$result = [];
	$index = 0;
	foreach ($rows as $row) {
		//echo $row["company"] . "<br />";
		$data =array(
			"name" => $row["company"]
		);
		$result[$index] = $data;
		$index++;
	}
	echo json_encode($result);
} catch (PDOException $ex) {
	$ex->getMessage();
	echo "Sorry, a database error occurred:<br />" . $ex;
}


?>