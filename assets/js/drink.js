var drinkButton = document.querySelector('.drink');
var drinksContainer = document.getElementById('drinks');
var searchButton = document.querySelector('.searchButton');
var input = document.querySelector('.input_text');


drinkButton.addEventListener('click', function randomDrink() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(
            function (response) {
                return response.json()
            }
        )
        .then(function (data) {
            console.log(data.drinks);
            let drink = data.drinks[0]
                var drinkChoice = document.createElement('h3');
                drinkChoice.textContent = drink.strDrink;
                drinksContainer.append(drinkChoice);
                for(let i=1; i<16; i++){
                    var measurements = document.createElement('h3');
                    var ingredients = document.createElement('h3');
                    measurements.textContent = eval("drink.strMeasure" + i);
                    ingredients.textContent = eval("drink.strIngredient" + i);
                    drinksContainer.append(measurements);
                    drinksContainer.append(ingredients);
                }
                var instructions = document.createElement('h3');
                instructions.textContent = drink.strInstructions;
                drinksContainer.append(instructions);
        })
        .catch(function (err) {
            console.log('fetch error', err);
        });

    


})




