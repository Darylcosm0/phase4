# Application behaviour
This is an application geared towards creating recipes and sharing them, with a focus on health. The application allows a user to:

1. View a list of the names of all the recipes available
2. Click on a recipe to view its details

3. View a list of all the recipes they have created 

4. Search for a recipe from the list of all the recipes
5. Sort the recipes by the newest 
6. Sort the recipes by the oldest

7. Create a new recipe

8. Delete a recipe they have created 
9. Update a recipe they have created

10. They can add an ingredient to a recipe
11. Delete an ingredient from a recipe 

12. Add foods they are allergic to after signing up
13. Delete an allergy they have created

14. They can add a label to a recipe
15. They can remove a label from a recipe

16. They can add a review to a recipe 
17. They can delete a review that they have added to a recipe
18. They can update a review they added to a recipe

19. Be alerted if a recipe contains an ingredient that the user is allergic to

# Pseudo code
## Components
1.Allergy
-show the names of allergies a user has from the database

2.AddAllergy
-add a new allergy to a user : form, input:text, button

3.RemoveAllergy
-delete an alergy a user has added from the database

4.UserRecipes 
- Get recipes for a user from database
- render **listRecipe** with the recipes as props


5.Allrecipes
- Get all recipes from database
- render **listRecipe** with the recipes as prop
- render **Search** component 
- render **Sort** component


6.listRecipe
-iterate through and render only names as a div
-make div a link to the single recipe page

7.SingleRecipeCrud
- render recipe details ie.
 - title
 - render **RecipeWarning**
 - render **RecipeLabels**
 - recipe_image
 - description
 - render **RecipeIngredients**
 - instructions
 - cuisine
 - render **TotalCalories**

 -render **RecipeReviews**

  
- render **newRecipe**
- render **UpdateRecipe**
- render **DeleteRecipe**
- render **AddIngredient**
- render **RemoveIngredient**
- render **AddLabel**
- render **RemoveLabel**

8.SingleRecipeAll
- render recipe details ie.
    - title
    - render **RecipeWarning**
    - render **RecipeLabels**
    - recipe_image
    - description
    - render **RecipeIngredients**
    - instructions
    - cuisine
    - render **TotalCalories**

- render **RecipeReviews**

- render **AddReview**
- render **RemoveReview**

6.Search
- search for the name or cuisine
- provide a form for the use to enter their query
- send this query to the database
- set the search results in state/store

7.Sort
-provide a select menu with newest and oldest options
-use get on the relevant route
-render the sort results in state/store

8.RecipeWarning
-render a warning statement with an ingredient name as part of it
-compare the allergies a user has added to the ingredients the have added,
if there are any matches render a statement with them

9.RecipeLabels
- render the labels that have been added to a recipe

10.RecipeIngredients
-render the ingredients of a recipe
show the:
    -calories(after calculation)
    -name
    -quantity
    -measurement-unit

11.TotalCalories
-calculate the total calories in a recipe and render the result

12.RecipeReviews
-render all the reviews of a specific recipe.Show the rating and the comment

13.newRecipe
-provide  a form for the user to add a new recipe.Fields:
    -title
    -instructions
    -description
    -cuisine
    -recipe_image
    *auto add the user id
-on submission it should send a post request and add the recipe


14.UpdateRecipe
-provide  a form for the user to add a new recipe.Fields:
    -title
    -instructions
    -description
    -cuisine
    -recipe_image
    *auto add the user id
-on submission it should send a put with the recipes id in the url  and update the existing recipe

15.DeleteRecipe
-it should find a recipes id and send a delete request with that recipe id as part of the url

16.AddIngredient
-provide  a form for the user to add a new ingredient to an existing Recipe.Fields:
    -name
    -quantity
    -measurement_unit
    -calories
    *auto add the recipe_id
-on submission it should send a post request and add the ingredient

17.RemoveIngredient
-it should find an ingredients id and send a delete request with that ingredients id as part of the url

18.AddLabel
-it should provide a select menu with labels for a user to choose
-after selection it should send a post request to recipe_label with the recipe_id and label_id

19.RemoveLabel
-it should send a delete request to recipe_label with the recipe_id and label_id

20.AddReview
- It should provide a form that allows a user to add a review to an existing recipe.Fields:
    - rating
    - comment
    - *auto add user_id
    - *auto add recipe_id


21.RemoveReview
-it should find an reviews id and send a delete request with that reviews id as part of the url
























# Application behaviour
This backend application requires the client to be logged in to use it.When logged in:

1.They can view all the recipes in the database -done
2.They can view a single recipe by id -done

3.They can view all the recipes that they have created -done

4.They can search for a recipe -done
5.They can sort a recipe by one of their properties eg. newest -done

6.They can create a new recipe -done
7.They can update recipe information -done
8.They can delete  a recipe -done

9.They can add a new ingredient  -done
10.They can delete an ingredient -done

11.They can add an allergy -done
12.They can delete an allergy -done

13.They can add a label to a recipe -done
14.They can remove a label from a recipe -done

15.They add a review to a recipe -done
16.They delete a review -done
17.They can edit a review -done 