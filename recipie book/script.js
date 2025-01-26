const recipes = [
    { 
        name: "Pancakes", 
        category: "Breakfast", 
        description: "Fluffy pancakes with syrup.", 
        ingredients: ["Flour", "Eggs", "Milk", "Sugar", "Butter", "Baking powder"],
        instructions: "Mix ingredients and cook on a griddle until golden brown.",
        image: "pancake.jpg"  // Path to your image
    },
    { 
        name: "Scrambled Eggs", 
        category: "Breakfast", 
        description: "Soft scrambled eggs with herbs.", 
        ingredients: ["Eggs", "Milk", "Salt", "Pepper", "Butter"],
        instructions: "Whisk eggs, cook in a pan with butter until soft.",
        image: "scrambled-eggs.jpg"
    },
    { 
        name: "Caesar Salad", 
        category: "Lunch", 
        description: "Crisp lettuce with Caesar dressing.", 
        ingredients: ["Lettuce", "Caesar dressing", "Croutons", "Parmesan"],
        instructions: "Toss lettuce with dressing, top with croutons and cheese.",
        image: "caeser.webp"
    },
    { 
        name: "Grilled Cheese", 
        category: "Lunch", 
        description: "Classic grilled cheese sandwich.", 
        ingredients: ["Bread", "Cheese", "Butter"],
        instructions: "Butter the bread, add cheese, and grill on both sides.",
        image: "grilled.jpg"
    },
    { 
        name: "Spaghetti Carbonara", 
        category: "Dinner", 
        description: "Creamy pasta with bacon.", 
        ingredients: ["Spaghetti", "Bacon", "Eggs", "Parmesan", "Cream"],
        instructions: "Cook pasta, fry bacon, mix with eggs and cheese to create sauce.",
        image: "spaghetti.jpg"
    },
    { 
        name: "Chicken Stir Fry", 
        category: "Dinner", 
        description: "Stir fried chicken with veggies.", 
        ingredients: ["Chicken", "Bell peppers", "Soy sauce", "Garlic", "Ginger", "Carrot"],
        instructions: "Stir fry chicken and vegetables, add soy sauce and serve.",
        image: "stir.jpg"
    },
    { 
        name: "Chocolate Cake", 
        category: "Dessert", 
        description: "Rich and moist chocolate cake.", 
        ingredients: ["Flour", "Cocoa powder", "Sugar", "Eggs", "Butter", "Baking powder"],
        instructions: "Mix ingredients, bake in oven, frost with chocolate frosting.",
        image: "Cake.webp"
    },
    { 
        name: "Apple Pie", 
        category: "Dessert", 
        description: "Homemade apple pie with cinnamon.", 
        ingredients: ["Apples", "Cinnamon", "Sugar", "Butter", "Pie crust"],
        instructions: "Fill pie crust with apples and bake.",
        image: "apple.jpg"
    },
    { 
        name: "Granola Bars", 
        category: "Snacks", 
        description: "Healthy granola bars with nuts.", 
        ingredients: ["Oats", "Almonds", "Honey", "Peanut butter", "Dried fruit"],
        instructions: "Mix and bake ingredients to form bars.",
        image: "granola.jpg"
    },
    { 
        name: "Fruit Smoothie", 
        category: "Snacks", 
        description: "Refreshing smoothie with mixed fruits.", 
        ingredients: ["Banana", "Strawberries", "Yogurt", "Honey", "Ice"],
        instructions: "Blend all ingredients until smooth.",
        image: "fruit.jpg"
    }
];

function renderRecipes(filteredRecipes) {
    const recipeList = document.getElementById("recipes");
    recipeList.innerHTML = ""; // Clear current list

    filteredRecipes.forEach(recipe => {
        const recipeItem = document.createElement("div");
        recipeItem.classList.add("recipe-item");

        recipeItem.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <button onclick="viewRecipe(${filteredRecipes.indexOf(recipe)})">View</button>
        `;
        
        recipeList.appendChild(recipeItem);
    });
}

function searchRecipes() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(query) || recipe.description.toLowerCase().includes(query)
    );
    renderRecipes(filteredRecipes);
}

function filterCategory(category) {
    const filteredRecipes = recipes.filter(recipe => recipe.category === category);
    renderRecipes(filteredRecipes);
}

function viewRecipe(index) {
    const recipe = recipes[index];
    const recipeDetails = document.createElement("div");
    recipeDetails.classList.add("recipe-details");

    recipeDetails.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-detail-image">
        <h3>Ingredients for ${recipe.name}</h3>
        <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        <h3>Instructions</h3>
        <p>${recipe.instructions}</p>
        <button onclick="closeRecipeDetails()">Close</button>
    `;

    const recipeList = document.getElementById("recipes");
    recipeList.innerHTML = "";  // Clear current list
    recipeList.appendChild(recipeDetails);
}

function closeRecipeDetails() {
    renderRecipes(recipes);  // Render the original recipe list again
}

// Initial load with all recipes
renderRecipes(recipes);















// Function to show the recipe modal
function showRecipe(recipeId) {
    // Hide all modals
    let modals = document.querySelectorAll('.recipe-modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });

    // Show the selected recipe modal
    document.getElementById(recipeId).style.display = 'block';
}

// Function to close the recipe modal
function closeRecipe(recipeId) {
    document.getElementById(recipeId).style.display = 'none';
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    let modals = document.querySelectorAll('.recipe-modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};








    
        

        
        
        
       



