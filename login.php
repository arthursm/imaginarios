<?php

// Define database connection parameters
// $hn = '192.168.10.8:81';
// $username = 'root';
// $password = 'estagio123';
// $db = 'viagensMobile';
// $cs = 'utf8';

// // Set up the PDO parameters
//$conn = new PDO('mysql:host=192.168.10.8:81;dbname="viagensMobile"', $username, $password);

// echo 'hellow word';

// $mysqli = new mysqli("localhost", "root", "root", "viagensMobile");
// $row = $mysqli->query ("SELECT `senha` FROM `usuarios` WHERE `login` = 'estagiario'");
// echo $row;

// $servername = "localhost";
// $username = "root";
// $password = "root";
// $dbname = "viagensMobile";

// // Create connection
// $conn = new mysqli($servername, $username, $password, $dbname);
// // Check connection
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }

// $sql = "SELECT `senha` FROM `usuarios` WHERE `login` = 'estagiario'";
// $result = $conn->query($sql);

// if ($result->num_rows > 0) {
//     // output data of each row
//     while($row = $result->fetch_assoc()) {
//         $bla =  $row["senha"];
//         echo $bla;
//     }
// } else {
//     echo "0 results";
// }
// $conn->close();




// Define database connection parameters

header("Access-Control-Allow-Origin: *");



$login 		     = filter_var($obj->login, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
$senha 		     = filter_var($obj->senha, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);





$hn = "127.0.0.1";
$un = 'root';
$pwd = 'root';
$db = 'viagensMobile';
$cs = 'utf8';

// Set up the PDO parameters
$dsn = "mysql:host=" . $hn . ";port=3306;dbname=" . $db . ";charset=" . $cs;
$opt = array(
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
    PDO::ATTR_EMULATE_PREPARES => false,
);
// Create a PDO instance (connect to the database)
$pdo = new PDO($dsn, $un, $pwd, $opt);
$data = array();

// Attempt to query database table and retrieve data
try {
    $stmt = $pdo->query("SELECT `senha` FROM `usuarios` WHERE `login` = 'estagiario'");
    while ($row = $stmt->fetch(PDO::FETCH_OBJ)) {
        // Assign each row of data to associative array
        $data[] = $row;
    }

    // Return data as JSON
    echo json_encode($data);
} catch (PDOException $e) {
    echo $e->getMessage();

}
?>
