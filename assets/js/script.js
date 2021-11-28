document.addEventListener('DOMContentLoaded', function() {
    var user = JSON.parse(localStorage.getItem('drink'));
    if (user != null) {
        var drinksContainer = document.getElementById('drinks');
        console.log(user)
        var data = JSON.parse(localStorage.getItem('drink')) || []
        let drink = data
                        var drinkChoice = document.createElement('h3');
                        drinkChoice.textContent = drink.strDrink;
                        drinksContainer.append(drinkChoice);
                        for (let i = 1; i < 16; i++) {
                            var recipeItems = document.createElement('h3');
                            recipeItems.textContent = eval("drink.strMeasure" + i) + " " + eval("drink.strIngredient" + i);
                            if (eval("drink.strMeasure" + i) !== null) {
                                drinksContainer.append(recipeItems);
                            }
                        }
        var instructions = document.createElement('h3');
        instructions.textContent = drink.strInstructions;
        drinksContainer.append(instructions);
    }
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var food = JSON.parse(localStorage.getItem('meal'));
    if (food != null) {
        var mealsContainer = document.getElementById('meals');
        console.log(food)
        var data = JSON.parse(localStorage.getItem('meal')) || []
        let meal = data
            var mealChoice = document.createElement('h3');
            mealChoice.textContent = meal.strMeal;
            mealsContainer.append(mealChoice);
            for (let i = 1; i < 16; i++) {
                var recipeItems = document.createElement('h3');
                recipeItems.textContent = eval("meal.strMeasure" + i) + " " + eval("meal.strIngredient" + i);
                if (eval("meal.strMeasure" + i) !== null) {
                    mealsContainer.append(recipeItems);
                }
            }
            var instructions = document.createElement('h3');
            instructions.textContent = meal.strInstructions;
            mealsContainer.append(instructions);
        }
    }, false);

