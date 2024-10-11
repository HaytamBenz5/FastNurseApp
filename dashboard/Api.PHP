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
$email = $data['email'];
$password = $data['password'];
$date = $data['date'];
$nom = $data['name'];
$prenom=$data['prenom'];
$telephone='0X XX XX XX XX';
$id_patient = 'P'.rand(1000,10000);

// Prepare the SQL statement
$stmt = $conn->prepare("INSERT INTO `patient`(`id_patient`,`nom_patient`,`prenom_patient`, `email_patient`, `password_patient`,
`telephone_patient`, `date`) VALUES (?, ?, ?, ?, ? , ? ,?)");
$stmt->bind_param("sssssss",$id_patient, $nom, $prenom, $email, $password,$telephone, $date);

// Execute the SQL statement
if ($stmt->execute()) {
  $response = array('success' => true);
  echo json_encode($response);
} else {
  $response = array('success' => false, 'message' => $conn->error);
  echo json_encode($response);
}

// Close the database connection and statement
$stmt->close();
$conn->close();

?>