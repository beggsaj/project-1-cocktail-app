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

function ValidateDOB() {
    var lblError = document.getElementById("lblError");

    //Get the date from the TextBox.
    var dateString = document.getElementById("textDate").value;
    var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

    //Check whether valid dd/MM/yyyy Date Format.
    if (regex.test(dateString)) {
        var parts = dateString.split("/");
        var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
        var dtCurrent = new Date();
        lblError.innerHTML = "Eligibility 18 years ONLY."
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
            return false;
        }

        if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {

            //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
            if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                return false;
            }
            if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
                if (dtCurrent.getDate() < dtDOB.getDate()) {
                    return false;
                }
            }
        }
        lblError.innerHTML = "";
        return true;
    } else {
        lblError.innerHTML = "Enter date in dd/MM/yyyy format ONLY."
        return false;
    }
}