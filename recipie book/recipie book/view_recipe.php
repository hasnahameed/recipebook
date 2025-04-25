<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Recipe Details</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <?php
        // Enable MySQLi error reporting
        mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

        // Establish database connection
        $conn = new mysqli('localhost', 'root', '', 'project');

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Check if a recipe ID was provided
        if (isset($_GET['id'])) {
            $recipe_id = $_GET['id'];

            // Prepare and execute SQL statement to fetch recipe details
            $stmt = $conn->prepare("SELECT id,Recipe, Ingredients, Instructions, email2 FROM conta WHERE id = ?");
            $stmt->bind_param("i", $recipe_id);
            $stmt->execute();
            $stmt->bind_result($id,$Recipe, $Ingredients, $Instructions ,$email2);

            // Display recipe details
            if ($stmt->fetch()) {
                echo "<h2>" . htmlspecialchars($Recipe) . "</h2>";
                echo "<p><strong>Submitted by:</strong> " . htmlspecialchars($email2) . "</p>";
                echo "<p><strong>Ingredients:</strong><br>" . nl2br(htmlspecialchars($Ingredients)) . "</p>";
                echo "<p><strong>Instructions:</strong><br>" . nl2br(htmlspecialchars($Instructions)) . "</p>";
                
                

            } else {
                echo "<div class='alert alert-warning'>Recipe not found.</div>";
            }

            $stmt->close();
        } else {
            echo "<div class='alert alert-danger'>No recipe ID provided.</div>";
        }

        // Close the database connection
        $conn->close();
        ?>
    </div>
</body>
</html>
