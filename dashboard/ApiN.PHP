<?php
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
$prenom = $data['prenom'];
$Grade = $data['Grade'];
$Address = $data['Adresse'];
$phone = '0X XX XX XX XX'
// Prepare the statement
$stmt = $conn->prepare("INSERT INTO `nurse`(`nom_nurse`,`prenom_nurse`, `email_nurse`, `password_nurse`, `Grade_nurse`,  `Address_nurse`, `date_nurse`, `telephone_nurse`) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssssss", $nom, $prenom, $email, $password, $Grade, $Address, $date, $phone);

// Execute the statement
if ($stmt->execute()) {
  $response = array('success' => true);
  echo json_encode($response);
} else {
  $response = array('success' => false, 'message' => $conn->error);
  echo json_encode($response);
}

$conn->close();
?>
