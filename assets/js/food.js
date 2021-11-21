var mealButton = document.querySelector('.meal');
var mealsContainer = document.getElementById('meals');
var searchButton = document.querySelector('.searchButton');
var input = document.querySelector('.input_text');


mealButton.addEventListener('click', function randommeal() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(
            function (response) {
                return response.json()
            }
        )
        .then(function (data) {
            console.log(data.meals);
            let meal = data.meals[0]
                var mealChoice = document.createElement('h3');
                mealChoice.textContent = meal.strMeal;
                mealsContainer.append(mealChoice);
                for(let i=1; i<16; i++){
                    var measurements = document.createElement('h3');
                    var ingredients = document.createElement('h3');
                    measurements.textContent = eval("meal.strMeasure" + i);
                    ingredients.textContent = eval("meal.strIngredient" + i);
                    mealsContainer.append(measurements);
                    mealsContainer.append(ingredients);
                }
                var instructions = document.createElement('h3');
                instructions.textContent = meal.strInstructions;
                mealssContainer.append(instructions);
        })
        .catch(function (err) {
            console.log('fetch error', err);
        });

    


})




