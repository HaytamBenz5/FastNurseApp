<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "doctorapp";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);


$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'];
$password = $data['password'];

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to select data from table
$sql = "SELECT id_nurse,nom_nurse,prenom_nurse,Grade_nurse,Address_nurse,telephone_nurse,email_nurse,password_nurse FROM nurse
WHERE email_nurse='$email' AND password_nurse='$password';";

// Execute query and store result
$result = $conn->query($sql);


$response = array();
$response1 = array();



// Check if any rows were returned
if ($result->num_rows > 0) {
$response["Flag"] = true;

while ($row = mysqli_fetch_assoc($result)) {
  $response["id_nurse"]  = $row['id_nurse'];
  $response["nom_nurse"]  = $row['nom_nurse'];
  $response["prenom_nurse"]  = $row['prenom_nurse'];
  $response["Grade_nurse"]  = $row['Grade_nurse'];
  $response["Address_nurse"]  = $row['Address_nurse'];
  $response["telephone_nurse"]  = $row['telephone_nurse'];

}

// Send response as JSON
echo json_encode($response);
    
} else  {
$response1["Flag"] = false;
$response1["id_nurse"] = null;


// Send response as JSON
echo json_encode($response1);
}

// Close database connection
$conn->close();
?>
