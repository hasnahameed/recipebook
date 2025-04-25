<?php
$counter = 0;
while ($row = $result->fetch_assoc()) {
    $recipeId = $row['id']; // Assuming your recipe table has an 'id' field
    echo '
    <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
            <div class="card-body">
                <h5 class="card-title">' . htmlspecialchars($row["Recipe"]) . '</h5>
                <a href="view_recipe.php?id=' . $recipeId . '" target="_blank" class="btn btn-primary mb-2">
                 <button class="btn btn-primary mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#' . $recipeId . '" aria-expanded="false" aria-controls="' . $recipeId . '">
                    View Recipe
                </button>
                <div class="collapse" id="' . $recipeId . '">
                    <h6 class="card-subtitle mb-2 text-muted">Submitted by: ' . htmlspecialchars($row["email2"]) . '</h6>
                    <p><strong>Ingredients:</strong><br>' . nl2br(htmlspecialchars($row["Ingredients"])) . '</p>
                    <p><strong>Instructions:</strong><br>' . nl2br(htmlspecialchars($row["Instructions"])) . '</p>
                    View Recipe
                </a>
            </div>
        </div>
    </div>';
    $counter++;
}
?>
