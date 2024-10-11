<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "doctorapp";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents('php://input'), true);
$id_patient=$data['id_patient'];

$sql = "SELECT id_nurse,id_patient,tckt_status FROM Ticket;";


// 



// Execute query and store result
$result = $conn->query($sql);
if($result){
    echo json_encode();
}else {
    echo 'bad';
}


$response = array();




// Check if any rows were returned

while ($row = mysqli_fetch_assoc($result)) {
    $response [] =$row;

}
$json_data = json_encode($response);
// Send response as JSON
echo json_encode($json_data);


// Close database connection
$conn->close();
?>
