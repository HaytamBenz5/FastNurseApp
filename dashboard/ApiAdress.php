<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "doctorapp";

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
$conn->set_charset("utf8");

$data = json_decode(file_get_contents('php://input'), true);
$Grade=$data['Grade'];
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  $sql = "SELECT id_nurse,nom_nurse,prenom_nurse,email_nurse,Grade_nurse,Address_nurse,telephone_nurse FROM nurse WHERE grade_nurse='$Grade'; ";

  $result = $conn->query($sql);

  $addresses = array();
$data = array();
  if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
         $data[] = $row;
    }
  }

;

echo  json_encode($data);
 // echo implode("|", $addresses);
?>
