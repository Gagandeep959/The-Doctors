<?php
// Database connection parameters
$servername = "localhost"; // e.g., "localhost"
$db_username = "root";     // Your MySQL username
$db_password = "";         // Your MySQL password (often empty for local development)
$dbname = "your_database_name"; // Replace with your database name

// 1. Create connection
$conn = new mysqli($servername, $db_username, $db_password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form data was submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Retrieve and sanitize form data
    $username = $_POST['username'];
    $email = $_POST['email'];

    // 2. Prepare the SQL statement for safe insertion (Prepared Statements)
    $sql = "INSERT INTO users (username, email) VALUES (?, ?)";
    
    // Initialize a statement
    $stmt = $conn->prepare($sql);
    
    // Bind parameters: 'ss' means two string parameters
    // This is where the security against SQL injection is handled
    $stmt->bind_param("ss", $username, $email);

    // 3. Execute the statement
    if ($stmt->execute()) {
        echo "New record created successfully. <a href='index.html'>Go Back</a>";
    } else {
        echo "Error: " . $stmt->error;
    }

    // 4. Close the statement and connection
    $stmt->close();
} else {
    echo "Form was not submitted correctly.";
}

$conn->close();
?>
