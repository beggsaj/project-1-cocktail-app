function randomDrink(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(
        function(response) {
            if (response.status !== 200) {
                console.log('success');
                return;
            }

            response.json().then(function(data) {
                console.log(data);
            });
        }
    )
    .catch(function(err){
        console.log('fetch error', err);
    });
}



function randomMeal(){
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(
        function(response) {
            if (response.status !== 200) {
                console.log('success');
                return;
            }

            response.json().then(function(data) {
                console.log(data);
            });
        }
    )
    .catch(function(err){
        console.log('fetch error', err);
    });
}

randomDrink();
randomMeal();