// Recipe data
const recipes = [
    { 
        name: "Pancakes", 
        category: "Breakfast", 
        description: "Fluffy pancakes with syrup.",
        image: "pancake.jpg",
        ingredients: ["Flour", "Eggs", "Milk", "Sugar", "Baking powder"],
        instructions:"To make pancakes, start by mixing the dry ingredients. In a large bowl, whisk together 1 cup of all-purpose flour, 2 tablespoons of sugar, 2 teaspoons of baking powder, and 1/4 teaspoon of salt. In a separate bowl, whisk together 1 egg, 1 cup of milk, and 2 tablespoons of melted butter (or vegetable oil). If you like, you can add 1 teaspoon of vanilla extract for extra flavor. Next, pour the wet ingredients into the dry ingredients and stir gently until just combined; it's okay if the batter is a little lumpy, as overmixing can lead to dense pancakes. Preheat a non-stick skillet or griddle over medium heat and lightly grease it with butter or cooking spray. For each pancake, pour about 1/4 cup of batter onto the skillet. Cook the pancake until bubbles form on the surface, about 2-3 minutes, then flip it and cook for another 1-2 minutes until golden brown. Serve the pancakes warm with syrup, fresh fruit, or your favorite toppings. Enjoy your delicious, fluffy pancakes!"
    },
    { 
        name: "Scrambled Eggs", 
        category: "Breakfast", 
        description: "Soft scrambled eggs with herbs.",
        image: "scrambled-eggs.jpg",
        ingredients: ["Eggs", "Butter", "Salt", "Pepper"],
        instructions: "To make scrambled eggs, begin by cracking 2-3 eggs into a bowl and whisking them together until well combined. Add a pinch of salt and pepper to taste, and if you prefer creamier eggs, you can stir in a splash of milk or cream. Next, heat a non-stick skillet over medium-low heat and add a small knob of butter. Once the butter has melted and begins to bubble, pour in the beaten eggs. Allow them to sit for a moment before gently stirring with a spatula, moving the eggs from the edges of the pan toward the center. Continue to cook, stirring occasionally, until the eggs are just set and slightly soft. Remove the pan from the heat before the eggs are fully cooked, as they will continue to cook from the residual heat. Serve immediately, garnished with herbs like chives or parsley if desired, and enjoy your soft and fluffy scrambled eggs!"
    },
    { 
        name: "Caesar Salad", 
        category: "Lunch", 
        description: "Crisp lettuce with Caesar dressing.",
        image: "caeser.webp",
        ingredients: ["Lettuce", "Caesar dressing", "Croutons", "Parmesan cheese"],
        instructions: "To make a Caesar salad, start by washing and drying a few cups of fresh Romaine lettuce, then tear it into bite-sized pieces and place it in a large bowl. Next, add Caesar dressing to the lettuce, tossing it gently to coat each leaf evenly. If you'd like to make the salad extra crunchy, sprinkle in some homemade or store-bought croutons. Top the salad with a generous amount of grated Parmesan cheese for a rich, savory flavor. For an extra touch, you can also add a sprinkle of freshly ground black pepper. Serve immediately as a fresh and delicious side dish or a light meal. Enjoy the crisp, creamy, and satisfying Caesar salad!"
    },
    { 
        name: "Grilled Cheese", 
        category: "Lunch", 
        description: "Classic grilled cheese .",
        image: "grilled.jpg",
        ingredients: ["Bread", "Cheese", "Butter"],
        instructions: "To make a classic grilled cheese sandwich, start by buttering one side of two slices of bread. Heat a non-stick skillet or griddle over medium heat. Place one slice of bread, buttered side down, onto the skillet. Add a generous amount of your favorite cheese, such as cheddar or American, on top of the bread. Place the second slice of bread on top, buttered side up. Grill the sandwich for 2-3 minutes, pressing it gently with a spatula, until the bottom is golden brown and the cheese starts to melt. Carefully flip the sandwich and grill the other side for another 2-3 minutes, or until both sides are crispy and golden, and the cheese is fully melted. Remove from the skillet, slice, and serve hot for a warm, gooey, and delicious grilled cheese sandwich."
    },
    { 
        name: "Spaghetti Carbonara", 
        category: "Dinner", 
        description: "Creamy pasta with bacon.",
        image: "spaghetti.jpg",
        ingredients: ["Spaghetti", "Eggs", "Bacon", "Parmesan cheese", "Cream"],
        instructions: "To make spaghetti carbonara, start by cooking 400 grams of spaghetti in a large pot of salted boiling water until al dente, following the package instructions. While the pasta cooks, heat a tablespoon of olive oil in a skillet over medium heat and add 150 grams of diced pancetta or bacon. Cook for 4-5 minutes, until crispy and browned, then remove from the heat. In a bowl, whisk together 2 large eggs, 1 cup of grated Parmesan cheese, and freshly ground black pepper. Once the pasta is done, reserve a cup of pasta water and drain the rest. Add the hot, drained spaghetti to the skillet with the pancetta, tossing to combine. Quickly pour in the egg and cheese mixture, tossing everything together to create a creamy sauce, adding a bit of the reserved pasta water to achieve the desired consistency. Serve immediately with extra Parmesan and black pepper on top for a rich, creamy, and savory spaghetti carbonara."
    },
    { 
        name: "Chicken Stir Fry", 
        category: "Dinner", 
        description: "Stir fried chicken with veggies.",
        image: "stir.jpg",
        ingredients: ["Chicken", "Bell peppers", "Onions", "Soy sauce", "Garlic"],
        instructions: "To make chicken stir fry, start by slicing 2 chicken breasts into thin strips. Heat a tablespoon of vegetable oil in a large skillet or wok over medium-high heat. Add the chicken strips and stir-fry for 5-6 minutes, until they are cooked through and lightly browned. Remove the chicken from the pan and set it aside. In the same skillet, add another tablespoon of oil and toss in your choice of sliced vegetables, such as bell peppers, onions, carrots, and broccoli. Stir-fry the vegetables for 3-4 minutes, until they are tender-crisp. Add the chicken back into the skillet, and then pour in a sauce made of 2 tablespoons soy sauce, 1 tablespoon hoisin sauce, 1 teaspoon garlic (minced), and a dash of sesame oil. Stir everything together to combine and heat through. Serve the stir fry over rice or noodles for a delicious, quick, and healthy meal."
    },
    { 
        name: "Chocolate Cake", 
        category: "Dessert", 
        description: "Rich and moist chocolate cake.",
        image: "Cake.webp",
        ingredients: ["Flour", "Cocoa powder", "Sugar", "Eggs", "Butter"],
        instructions: "To make a rich and moist chocolate cake, start by preheating your oven to 350°F (175°C) and greasing and flouring two 9-inch round cake pans. In a large bowl, whisk together 1 and 3/4 cups of all-purpose flour, 3/4 cup of unsweetened cocoa powder, 2 cups of sugar, 1 and 1/2 teaspoons of baking powder, 1 and 1/2 teaspoons of baking soda, and 1 teaspoon of salt. In a separate bowl, combine 2 large eggs, 1 cup of milk, 1/2 cup of vegetable oil, and 2 teaspoons of vanilla extract. Gradually add the wet ingredients to the dry ingredients and mix until just combined. Stir in 1 cup of boiling water to the batter—it will be thin, but that's normal. Pour the batter evenly into the prepared pans and bake for 30-35 minutes, or until a toothpick inserted into the center comes out clean. Allow the cakes to cool in the pans for 10 minutes before transferring them to wire racks to cool completely. Once cooled, frost with your favorite chocolate frosting and enjoy the decadent, homemade chocolate cake!"
    },
    { 
        name: "Apple Pie", 
        category: "Dessert", 
        description: "Homemade apple pie with cinnamon.",
        image: "apple.jpg",
        ingredients: ["Apples", "Cinnamon", "Sugar", "Pie crust"],
        instructions: "To make a homemade apple pie, begin by preheating your oven to 375°F (190°C) and greasing a 9-inch pie dish. For the crust, roll out one portion of your prepared pie dough and fit it into the bottom of the dish, trimming any excess dough around the edges. In a large bowl, toss together 6-8 peeled and sliced apples (such as Granny Smith or Honeycrisp) with 3/4 cup of granulated sugar, 1 tablespoon of lemon juice, 1 teaspoon of ground cinnamon, 1/4 teaspoon of ground nutmeg, and 2 tablespoons of flour. Pour the apple mixture into the prepared crust. Roll out the second portion of dough and place it over the apples, sealing the edges and trimming off any excess. Cut a few slits in the top crust to allow steam to escape while baking. For a golden finish, brush the top crust with a little milk or egg wash and sprinkle with a small amount of sugar. Bake for 45-50 minutes, or until the crust is golden brown and the filling is bubbling. Let the pie cool before serving to allow the filling to set. Enjoy your delicious, warm homemade apple pie!"
    },
    { 
        name: "Granola Bars", 
        category: "Snacks", 
        description: "Healthy granola bars with nuts.",
        image: "granola.jpg",
        ingredients: ["Oats", "Honey", "Almonds", "Peanut butter"],
        instructions: "To make homemade granola bars, start by preheating your oven to 350°F (175°C) and lining a baking dish with parchment paper. In a large bowl, combine 2 cups of old-fashioned rolled oats, 1/2 cup of chopped nuts (such as almonds or walnuts), 1/4 cup of seeds (like sunflower or pumpkin), and 1/4 cup of dried fruit (such as cranberries or raisins). In a separate small saucepan, heat 1/4 cup of honey, 1/4 cup of peanut butter or almond butter, and 1/4 cup of brown sugar over low heat, stirring until the mixture is smooth and the sugar has dissolved. Pour the wet mixture over the dry ingredients and stir well to coat everything evenly. Press the mixture into the prepared baking dish, packing it down firmly to ensure the bars hold together. Bake for 15-20 minutes, or until the edges are golden brown. Allow the granola bars to cool completely in the dish before cutting them into squares or rectangles. Enjoy your homemade, healthy granola bars as a delicious snack!"
    },
    { 
        name: "Fruit Smoothie", 
        category: "Snacks", 
        description: "Refreshing smoothie with mixed fruits.",
        image: "fruit.jpg",
        ingredients: ["Banana", "Strawberries", "Yogurt", "Milk"],
        instructions: "To make a refreshing fruit smoothie, start by adding 1 cup of your favorite frozen fruits to a blender, such as strawberries, blueberries, or mangoes. You can also add a banana for extra creaminess. Pour in 1/2 to 1 cup of liquid, such as milk, almond milk, or fruit juice, depending on your preference for consistency. For added sweetness, include a tablespoon of honey or maple syrup if desired. You can also throw in a handful of spinach or a spoonful of Greek yogurt for an extra nutritional boost. Blend everything on high speed until smooth and creamy. If the smoothie is too thick, add more liquid and blend again. Once ready, pour it into a glass and enjoy your healthy, delicious fruit smoothie!"
    }
];

// Global variable to store the filtered recipes
let filteredRecipes = recipes;

// Function to render recipes
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

// Function to search recipes
function searchRecipes() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    filteredRecipes = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(query) || recipe.description.toLowerCase().includes(query)
    );
    renderRecipes(filteredRecipes);
}

// Function to filter recipes by category
function filterCategory(category) {
    filteredRecipes = recipes.filter(recipe => recipe.category === category);
    renderRecipes(filteredRecipes);
}

// Function to view a specific recipe's details
function viewRecipe(index) {
    const recipe = filteredRecipes[index]; // Get the recipe by filtered index
    const recipeDetails = document.createElement("div");
    recipeDetails.classList.add("recipe-details");

    recipeDetails.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-detail-image">
        <h3>Ingredients for ${recipe.name}</h3>
        <ul>
            ${recipe.ingredients ? recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('') : "<li>No ingredients available</li>"}
        </ul>
        <h3>Instructions</h3>
        <p>${recipe.instructions ? recipe.instructions : "No instructions available"}</p>
        <button onclick="closeRecipeDetails()">Close</button>
    `;

    const recipeList = document.getElementById("recipes");
    recipeList.innerHTML = "";  // Clear current list
    recipeList.appendChild(recipeDetails);
}

// Function to close the recipe details and show the list again
function closeRecipeDetails() {
    renderRecipes(filteredRecipes);  // Render the filtered recipe list again
}

// Initial load with all recipes
renderRecipes(filteredRecipes);











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








    
        

        
        
        
       



