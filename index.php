<?php $mysqli = new mysqli("3306", "admin", "stargazer2020", "theplatform");
 if ($mysqli->connect_errno) {
 echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error; 
}; 
?>
