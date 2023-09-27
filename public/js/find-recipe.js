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
        var recipeContainer = document.querySelector('.recipe-data')

        for (let i = 0; i < 10; i++) {
            let recipeId = recipeData.results[i].id
            console.log(recipeId)
            const recipeCard = document.createElement('div')
            recipeCard.classList.add('recipe-card')
            const h1 = document.createElement('h1')
            h1.classList.add('recipe-card-title')

            const recipeImg = document.createElement('img')
                recipeImg.setAttribute('src', recipeData.results[i].image)
                recipeImg.classList.add('recipe-card-img')

            recipeCard.appendChild(h1)
            recipeCard.appendChild(recipeImg)

            recipeContainer.appendChild(recipeCard)

            h1.innerText = recipeData.results[i].title

            fetch('https://api.spoonacular.com/recipes/' + recipeId + '/information?apiKey=' + apiKey, {
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
             .then(function(recipeData){
                var recipeContainer = document.querySelector('.recipe-data')
                
                console.log(recipeData.cheap)
                const recipeLink = document.createElement('a')
                let linkText = document.createTextNode('Test')
                recipeLink.appendChild(linkText)
                recipeLink.title = 'Test title'
                recipeLink.href = recipeData.sourceUrl
                recipeCard.appendChild(recipeLink)
             }) 

             
        
        }

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