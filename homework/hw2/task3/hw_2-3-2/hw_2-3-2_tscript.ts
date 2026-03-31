// #whXxOBlYS0H
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.
interface IRecipes {
    id: number,
    name: string,
    ingredients: string[],
    instructions: string[],
    prepTimeMinutes: number,
    cookTimeMinutes: number,
    servings: number,
    difficulty: string,
    cuisine: string,
    caloriesPerServing: number,
    tags: string[],
    userId: number,
    image: string,
    rating: number,
    reviewCount: number,
    mealType: string[],
}

const recipesSection:HTMLElement|null = document.getElementById('recipes');
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then((recipesObject:{recipes:IRecipes[]}):void => {

        // console.log(recipesObject)

        let {recipes} = recipesObject;
        for (const recipe of recipes) {

            const divRecipes:HTMLDivElement = document.createElement('div');
            const recipeId:HTMLHeadingElement = document.createElement('h3');
            recipeId.innerText = `ID: ${recipe.id}`;
            const divItems:HTMLDivElement = document.createElement('div');
            const parameters:HTMLParagraphElement = document.createElement('p');
            parameters.innerText = `Name: ${recipe.name},
              Calories Per Serving: ${recipe.caloriesPerServing},
              Cook Time Minutes: ${recipe.cookTimeMinutes},
              Cuisine: ${recipe.cuisine},
              Difficulty: ${recipe.difficulty}, 
              Prep Time Minutes: ${recipe.prepTimeMinutes},
              Rating: ${recipe.rating},
              Review Count: ${recipe.reviewCount},
              Servings: ${recipe.servings},
              User ID: ${recipe.userId}`;
            divItems.append(parameters);

            const pIngredients:HTMLParagraphElement = document.createElement('p');
            pIngredients.innerText = 'Ingredients:';
            const ulIngredients:HTMLUListElement = document.createElement('ul');
            for (const ingredient of recipe.ingredients) {
                const liIngredient:HTMLLIElement = document.createElement('li');
                liIngredient.innerText = `${ingredient}`;
                ulIngredients.append(liIngredient)
            }

            const pInstructions:HTMLParagraphElement = document.createElement('p');
            pInstructions.innerText = 'Instructions:';
            const ulInstructions:HTMLUListElement = document.createElement('ul');
            for (const point of recipe.instructions) {
                const liPoint:HTMLLIElement = document.createElement('li');
                liPoint.innerText = `${point}`;
                ulInstructions.append(liPoint);
            }

            const pMealType:HTMLParagraphElement = document.createElement('p');
            pMealType.innerText = `Meal Type: ${recipe.mealType}`;
            const pTags:HTMLParagraphElement = document.createElement('p');
            pTags.innerText = `Tags: ${recipe.tags}`;

            const imgDish:HTMLImageElement = document.createElement('img');
            imgDish.src = `${recipe.image}`;

            divRecipes.append(recipeId, divItems, pIngredients, ulIngredients, pInstructions ,ulInstructions, pMealType, imgDish, pTags);
            if(recipesSection){
            recipesSection.appendChild(divRecipes);
            }
        }

    });
