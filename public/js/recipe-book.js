const imgContainer = document.querySelector('.recipe-image-container')
const recipeTitle = document.querySelector('.recipe-name').innerText
const recipeCard = document.querySelectorAll('.card')
apiKey = '39703052-5ded726e38b5406c4954036c9'

console.log(recipeTitle)

const formatRecipeTitle = recipeTitle.replace(/\s+/g, '-').toLowerCase()

function getRecipeImage(recipeName) {
    fetch('https://api.unsplash.com/search/photos?client_id=xmJxMtiaY-N1qQcbObkGq_EKdgS9kXN_VjM5MfXrqxw&query=' + formatRecipeTitle, {
        method: 'GET',
        headers: { 'X-Api-Key': '39703052-5ded726e38b5406c4954036c9'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result)
        }
    })
    .then(function(response) {
        return response.json()
    })


    .then(function(recipeImage) {
        console.log(recipeCard.length)

        recipeCard.forEach(addImg)
        
        function addImg() {
            const recipeImg = document.createElement('img')
            recipeImg.setAttribute('src', recipeImage.results[1].urls.small)
            recipeImg.classList.add('recipe-book-image')
            imgContainer.appendChild(recipeImg)

        }

    })
    .catch(function(err) {
        console.log(err)
    }) 
}

getRecipeImage()
