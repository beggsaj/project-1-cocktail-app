var drinkButton = document.querySelector('.drink');
var foodButton = document.querySelector('.food');
var drinksContainer = document.getElementById('drinks');
var mealContainer = document.getElementById('meals');

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
        })
        .catch(function (err) {
            console.log('fetch error', err);
        });

    


})


foodButton.addEventListener('click', function randomMeal() {
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
            mealContainer.append(mealChoice);
    })
    .catch(function (err) {
        console.log('fetch error', err);
    });
})