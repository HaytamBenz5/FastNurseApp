<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "doctorapp";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);


$data = json_decode(file_get_contents('php://input'), true);
$id_patient = $data['id_patient'];

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to select data from table
$sql = "";

// Execute query and store result
$result = $conn->query($sql);

$response = array();
$response1 = array();



// Check if any rows were returned
if ($result->num_rows > 0) {
$response["Flag"] = true;

while ($row = mysqli_fetch_assoc($result)) {
  $response["id_patient"]  = $row['id_patient'];

 $response["email_patient"]  = $row['email_patient'];
 $response["nom_patient"]  = $row['nom_patient'];

  $response["prenom_patient"]  = $row['prenom_patient'];
  $response["telephone_patient"]  = $row['telephone_patient'];
  
}

// Send response as JSON
echo json_encode($response);
    
} else  {
$response1["Flag"] = false;
$response1["id_patient"] = null;


// Send response as JSON
echo json_encode($response1);
}

// Close database connection
$conn->close();
?>
