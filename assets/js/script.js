document.addEventListener('DOMContentLoaded', function() {
    var user = JSON.parse(localStorage.getItem('drink'));
    if (user != null) {
        var drinksContainer = document.getElementById('recipe-container');
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

