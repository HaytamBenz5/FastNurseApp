
<?php
// Connect to the database
// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "doctorapp";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$conn->set_charset("utf8");

// Get email and password data from request body
$data = json_decode(file_get_contents('php://input'), true);
$id_patient = $data['id_patient'];
$id_nurse = $data['id_nurse'];
$tckt_service  = $data['tckt_service'];
$tck_NbPatients = $data['tck_NbPatients'];
$tckt_time = $data['tckt_time'];
$tckt_grade = $data['tckt_grade'];
$tckt_cmnt = $data['tckt_cmnt'];
$tckt_montant = $data['tckt_montant'];
$date = date("Y-m-d H:i:s");
$tckt_id='T'.rand(1000,10000);

$response = array();
// Build the SQL query
$sql = "INSERT INTO `ticket`(`tckt_id`,`tckt_Service`, `tckt_montant`, `tckt_NbPatients`, `tckt_time`, `tckt_grade`, `tckt_status`, `id_nurse`, `id_patient`, `tckt_date`, `tckt_cmnt`) 
VALUES ('$tckt_service', '$tckt_montant', '$tck_NbPatients', '$tckt_time', '$tckt_grade', 'Pending', '$id_nurse', '$id_patient', '$date', '$tckt_cmnt')";



// Execute the query and check for errors
if ($conn->query($sql) === TRUE) {
    
    echo json_encode(true);
    
} else {
   echo json_encode(false);
}

// Close the database connection
$conn->close();


?>