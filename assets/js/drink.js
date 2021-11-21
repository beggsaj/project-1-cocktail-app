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
                var ingredientOne = document.createElement('h3');
                ingredientOne.textContent = drink.strIngredient1;
                drinksContainer.append(ingredientOne);
                var measurementOne = document.createElement('h3');
                measurementOne.textContent = drink.strMeasure1;
                drinksContainer.append(measurementOne);
                var ingredientTwo = document.createElement('h3');
                ingredientTwo.textContent = drink.strIngredient2;
                drinksContainer.append(ingredientTwo);
                var measurementTwo = document.createElement('h3');
                measurementTwo.textContent = drink.strMeasure2;
                drinksContainer.append(measurementTwo);
                var ingredientThree = document.createElement('h3');
                ingredientThree.textContent = drink.strIngredient3;
                drinksContainer.append(ingredientThree);
                var measurementThree = document.createElement('h3');
                measurementThree.textContent = drink.strMeasure3;
                drinksContainer.append(measurementThree);
                var ingredientFour = document.createElement('h3');
                ingredientFour.textContent = drink.strIngredient4;
                drinksContainer.append(ingredientFour);
                var measurementFour = document.createElement('h3');
                measurementFour.textContent = drink.strMeasure4;
                drinksContainer.append(measurementFour);
                var ingredientFive = document.createElement('h3');
                ingredientFive.textContent = drink.strIngredient5;
                drinksContainer.append(ingredientFive);
                var measurementFive = document.createElement('h3');
                measurementFive.textContent = drink.strMeasure5;
                drinksContainer.append(measurementFive);
                var instructions = document.createElement('h3');
                instructions.textContent = drink.strInstructions;
                drinksContainer.append(instructions);
        })
        .catch(function (err) {
            console.log('fetch error', err);
        });

    


})

searchButton.addEventListener('click', function specificDrink(language) {
    var language = document.querySelector('.data-language');
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+input.value+'')
        .then(
            function (response) {
                return response.json()
               

            }      )
            .then(function (data) {
                console.log(data.drinks);
                let drink = data.drinks[0]
                    var drinkChoice = document.createElement('h3');
                    drinkChoice.textContent = drink.strDrink;
                    drinksContainer.append(drinkChoice);
            })})


