var recipeInputEl = document.querySelector('.recipe-search')
var recipeForm = document.querySelector('.recipe-form')
const apiKey = '8835726891f84536a907703b99861410'

function getRecipes(recipeName) {
    fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=' + apiKey + '&query=' + recipeName, {
        method: 'GET',
        headers: { 'X-Api-Key': '8835726891f84536a907703b99861410'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result)
        }
    })
    .then(function(response) {
       return response.json()

    })
    .then(function(recipeData) {

        console.log(recipeData.results[0])

        var recipeContainer = document.querySelector('.recipe-data')
        var h1 = document.createElement('h1')
        recipeContainer.appendChild(h1)

        h1.innerText = recipeData.results[0].title
        console.log(h1)
    })
    .catch(function(err) {
        console.log(err)
    })
}

function getRecipeInput(e) {
    e.preventDefault()
    const recipeSearch = recipeInputEl.value 
    getRecipes(recipeSearch)
}

recipeForm.addEventListener('submit', getRecipeInput)