const recipes = [
    { 
        name: "Pancakes", 
        category: "Breakfast", 
        description: "Fluffy pancakes with syrup.", 
        
        image: "images/pancakes.jpg"
    },
    { 
        name: "Scrambled Eggs", 
        category: "Breakfast", 
        description: "Soft scrambled eggs with herbs.", 
        
        image: "images/scrambled_eggs.jpg"
    },
    { 
        name: "Caesar Salad", 
        category: "Lunch", 
        description: "Crisp lettuce with Caesar dressing.", 
        
        image: "images/caesar_salad.jpg"
    },
    { 
        name: "Grilled Cheese", 
        category: "Lunch", 
        description: "Classic grilled cheese sandwich.", 
        
        image: "images/grilled_cheese.jpg"
    },
    { 
        name: "Spaghetti Carbonara", 
        category: "Dinner", 
        description: "Creamy pasta with bacon.", 
       
        image: "images/spaghetti_carbonara.jpg"
    },
    { 
        name: "Chicken Stir Fry", 
        category: "Dinner", 
        description: "Stir fried chicken with veggies.", 
       
        image: "images/chicken_stir_fry.jpg"
    },
    { 
        name: "Chocolate Cake", 
        category: "Dessert", 
        description: "Rich and moist chocolate cake.", 
       
        image: "images/chocolate_cake.jpg"
    },
    { 
        name: "Apple Pie", 
        category: "Dessert", 
        description: "Homemade apple pie with cinnamon.", 
       
        image: "images/apple_pie.jpg"
    },
    { 
        name: "Granola Bars", 
        category: "Snacks", 
        description: "Healthy granola bars with nuts.", 
        
        image: "images/granola_bars.jpg"
    },
    { 
        name: "Fruit Smoothie", 
        category: "Snacks", 
        description: "Refreshing smoothie with mixed fruits.", 
        
        image: "images/fruit_smoothie.jpg"
    }
];

function renderRecipes(filteredRecipes) {
    const recipeList = document.getElementById("recipes");
    recipeList.innerHTML = ""; // Clear current list

    filteredRecipes.forEach((recipe, index) => {
        const recipeItem = document.createElement("div");
        recipeItem.classList.add("recipe-item");

        recipeItem.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <button onclick="viewRecipe(${index})">View</button>
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


