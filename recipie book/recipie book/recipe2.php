<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="style.css">
    <title>Recipe Book</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>
<body>
  
    <!----navbar---->

    <nav class="navbar navbar-expand-lg navbar-dark" id="navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Delicious Recipies</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link" href="recipe2.php">Recipe</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li> 
            </ul>  
            
            <a href="loginForm.html" class="btn signin">Sign In</a>
        </div>
      </nav>

      
      

      <!----recipe---->

      <section id="recipe">
        <div class="container m-5">
            <h1 class="text-center my-5">OUR RECIPES</h1>
            
            <div class="search-container">
              <input type="text" id="searchBar" placeholder="Search recipes..." onkeyup="searchRecipes()">

            </div>
      
  
          <div class="categories">
           <h2>Explore Categories</h2>
            <ul id="categoryList">
              <li><button onclick="filterCategory('Breakfast')">Breakfast</button></li>
              <li><button onclick="filterCategory('Lunch')">Lunch</button></li>
              <li><button onclick="filterCategory('Dinner')">Dinner</button></li>
              <li><button onclick="filterCategory('Dessert')">Dessert</button></li>
              <li><button onclick="filterCategory('Snacks')">Snacks</button></li>
            </ul>
          </div>
  
          <div class="recipe-list">
           <h2>Recipe List</h2>
           <div id="recipes">
            
          
               <!-- Recipe items will be dynamically added here -->

           </div>
          </div>

          

          
        
  
            <div class="row">
                <!-- Recipe 1 -->
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="card">
                        <img src="img1.jpg" class="card-img-top" alt="Recipe Image">
                        <div class="card-body text-center">
                            <h5 class="card-title">Biriyani</h5>
                            <button class="btn signin" onclick="showRecipe('recipe1')">View Recipe</button>
                        </div>
                    </div>
                </div>
                <!-- Recipe 2 -->
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="card">
                        <img src="img7.webp" class="card-img-top" alt="Recipe Image">
                        <div class="card-body text-center">
                            <h5 class="card-title">pasta</h5>
                            <button class="btn signin" onclick="showRecipe('recipe2')">View Recipe</button>
                        </div>
                    </div>
                </div>
                <!-- Recipe 3 -->
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="card">
                        <img src="img8.jpg" class="card-img-top" alt="Recipe Image">
                        <div class="card-body text-center">
                            <h5 class="card-title">pizza</h5>
                            <button class="btn signin" onclick="showRecipe('recipe3')">View Recipe</button>
                        </div>
                    </div>
                </div>
                <!-- Recipe 4 -->
                <div class="col-lg-4 col-md-4 col-12">
                  <div class="card">
                      <img src="img4.jpg" class="card-img-top" alt="Recipe Image">
                      <div class="card-body text-center">
                          <h5 class="card-title">Chicken Curry</h5>
                          <button class="btn signin" onclick="showRecipe('recipe4')">View Recipe</button>
                      </div>
                  </div>
                </div>
                <!-- Recipe 5-->
                <div class="col-lg-4 col-md-4 col-12">
                  <div class="card">
                    <img src="img5.jpg" class="card-img-top" alt="Recipe Image">
                    <div class="card-body text-center">
                        <h5 class="card-title">Fried Rice</h5>
                        <button class="btn signin" onclick="showRecipe('recipe5')">View Recipe</button>
                    </div>
                  </div>
                </div>
                <!-- Recipe 6-->
                <div class="col-lg-4 col-md-4 col-12">
                  <div class="card">
                      <img src="img6.jpeg" class="card-img-top" alt="Recipe Image">
                      <div class="card-body text-center">
                          <h5 class="card-title">Gulab Jamun</h5>
                          <button class="btn signin" onclick="showRecipe('recipe6')">View Recipe</button>
                      </div>
                  </div>
              </div>
            </div>
        </div>
      </section>
    
      <!-- Recipe Instructions Modal (Hidden by default) -->
      <div id="recipe1" class="recipe-modal">
        <div class="modal-content">
            <span class="close" onclick="closeRecipe('recipe1')">&times;</span>
            <h2>Biriyani Recipe</h2>
            <p>Ingredients: 3 large red onions, sliced thin,
              200ml peanut oil for frying,
              1 kg chicken thighs, skin off,
              4 tbsp yoghurt,
              1 tsp chilli powder,
              1/2 tsp ground turmeric,
              1 tsp garam masala,
              3 tsp ginger paste.</p>
            <p>Instructions: To cook biryani, start by marinating the meat with spices and yogurt. Then, sauté onions, garlic, and ginger in a pan. Add the marinated meat and cook until it's browned. Next, add rice, water, and whole spices to the pan. Cook on low heat until the rice is cooked and the flavors are infused.</p>
        </div>
      </div>
    
      <div id="recipe2" class="recipe-modal">
        <div class="modal-content">
            <span class="close" onclick="closeRecipe('recipe2')">&times;</span>
            <h2>Pasta Recipe</h2>
            <p>Ingredients: Pasta, Tomato Sauce, Cheese...</p>
            <p>Instructions: Take water in a sauce pan, add salt and oil to it. Boil it.
              When it starts to boil, add the pasta and cook in medium flame. Stir inbetween.
              Keep cooking and make sure you stir inbetween.
              Rinse it well in running water.
              Cooked pasta ready!</p>
        </div>
      </div>
    
      <div id="recipe3" class="recipe-modal">
        <div class="modal-content">
            <span class="close" onclick="closeRecipe('recipe3')">&times;</span>
            <h2>Pizza Recipe</h2>
            <p>Ingredients:  Dough, Cheese, Tomatoes,olive,Calzone, panzerotti</p>
            <p>Instructions: Start with a crust. ...
              Add a sauce. ...
              Add some veggies, such as:
              Try some fruit on your pizza, such as:
              Add some protein, such as:
              Add cheese. ...
              Bake your creation in a hot oven (450 F or above). ...
              Whole-wheat Pizza Crust.</p>
        </div>
      </div>

      <div id="recipe4" class="recipe-modal">
        <div class="modal-content">
          <span class="close" onclick="closeRecipe('recipe4')">&times;</span>
          <h2>Chicken Curry</h2>
          <p>Ingredients: ¼ cup vegetable oil.
            1 onion, chopped.
            1 tomato, chopped.
            2 slices habanero pepper (Optional)
            1 garlic clove, chopped.
            2 tablespoons Jamaican-style curry powder.
            ¼ teaspoon ground thyme.
            2 skinless, boneless chicken breast halves, cut into 1 1/2-inch pieces.</p>
          <p>Instructions: Onion, Garlic, and Ginger: One of our favorite tricks learned from Indian cuisine is to puree fresh garlic, ginger, onion, and water before cooking the puree in oil or ghee. This flavorful base adds so much to our chicken curry. We don't recommend swapping the fresh garlic and ginger for dried in this recipe.</p>
        </div>
      </div>

      <div id="recipe5" class="recipe-modal">
        <div class="modal-content">
          <span class="close" onclick="closeRecipe('recipe5')">&times;</span>
          <h2>Fried Rice</h2>
          <p>Ingredients:Cooked rice -- preferably chilled!
            Eggs -- that gives your egg fried rice the proper texture and adds delicious flavor.
            Peas, carrots, and onions -- these are the veggies that add all that color and taste in your vegetable fried rice.
            Soy sauce
            Sesame oil
            Green onions</p>
          <p>Instructions: Preheat the wok.
            Coat it with oil.
            Cook your veggies.
            Add beaten eggs and scramble.
            Mix the veggies, eggs, and rice together with sauces.
            Garnish!Ones I like are broccoli, onions, peppers, spinach, carrots, corn. If I feel like adding a clove of garlic, I'll do that too. Sometimes I just add garlic powder and onion powder instead of the real thing. Fried rice also tastes really good with some fresh basil and/or ginger (fresh or powder) </p>
        </div>
      </div>

      <div id="recipe6" class="recipe-modal">
        <div class="modal-content">
          <span class="close" onclick="closeRecipe('recipe6')">&times;</span>
          <h2>Gulab Jamun</h2>
          <p>Ingredients: Sugar, Water, Milk Ingredients, Enriched Wheat Flour, Canola Oil, Palm Oil, Vegetable Shortening, Semolina, Sodium Aluminum Phosphate, Sodium Bicarbonate, Natural Rose Water Flavour.</p>
          <p>Instructions: Homemade gulab jamun is usually made up of khoya, a pinch of all-purpose flour/refined wheat flour/ wheat flour (optional), baking powder and clarified butter (ghee); milk kneaded to form a dough, moulded into balls, deep fried and dropped into simmering sugar syrup.</p>
        </div>
      </div>



      
        
      <div class="container mt-5">
    <h2 class="mb-4 text-center">🍽️ Recipe List</h2>
    <div class="row">
        <?php
        $conn = new mysqli('localhost', 'root', '', 'project');

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT id, Recipe, email2 FROM conta"; // Note the addition of 'id'
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo '
                <div class="col-md-4 mb-4">
                    <div class="card h-100 shadow-sm">
                  
                        <div class="card-body">
                            <h5 class="card-title">' . htmlspecialchars($row["Recipe"]) . '</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Submitted by: ' . htmlspecialchars($row["email2"]) . '</h6>
                            
                             
                            <a href="view_recipe.php?id=' . $row["id"] . '" target="_blank" class="btn btn-primary mt-3">View Recipe</a>
                        </div>
                    </div>
                </div>';
            }
        } else {
            echo "<p>No recipes found.</p>";
        }

        $conn->close();
        ?>
    </div>
</div>

      
      
      
      
        
      <footer>
        <div class="footer">
           <div class="container">
              <div class="row">
                 <div class=" col-md-4">
                    <h3>Contact US</h3>
                    <ul class="conta">
                       <li><i class="fa fa-map-marker" aria-hidden="true"></i> Address</li>
                       <li><i class="fa fa-mobile" aria-hidden="true"></i> +01 1234569540</li>
                       <li> <i class="fa fa-envelope" aria-hidden="true"></i><a href="#"> demo@gmail.com</a></li>
                    </ul>
                 </div>
                 <div class="col-md-4">
                    <h3>Menu Link</h3>
                    <ul class="link_menu">
                       <li><a href="index.html">Home</a></li>
                       <li><a href="about.html"> About</a></li>
                       <li><a href="recipe.html">Recipe</a></li>
                       <li class="active"><a href="contact.html">Contact Us</a></li>
                    </ul>
                 </div>
                 <div class="col-md-4">
                    <h3>News letter</h3>
                    <form class="bottom_form">
                       <input class="enter" placeholder="Enter your email" type="text" name="Enter your email">
                       <button class="sub_btn">subscribe</button>
                    </form>
                    <ul class="social_icon">
                       <li><a href="#"><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
                       <li><a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
                       <li><a href="#"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
                       <li><a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                    </ul>
                 </div>
              </div>
           </div>
           <div class="copyright">
              <div class="container">
                 <div class="row">
                    <div class="col-md-10 offset-md-1">
                       <p>
                          Copyrights @frontendforever 2021.
                          <br><br>
                          
                          </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </footer>
     <!-- end footer -->

     
     
     
     


       
    <script src="script.js"></script>      
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></script>
     
    
</body>
</html>