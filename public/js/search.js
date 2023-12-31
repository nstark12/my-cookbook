const form = document.querySelector('form')
const searchInput = document.querySelector('input[type="search"]')
const resultsUl = document.getElementById('results')

const renderResults = results => {
    resultsUl.innerHTML = ''
    // loop through results
    for (const recipe of results) {
        const li = document.createElement('li')
        li.innerHTML = `
        <a href="/">
        <h2>${recipe.name}</h2>
        <p>${recipe.description}</p>
        <p>${recipe.category} || ${recipe.allergens}</p>
        <p>Servings: ${recipe.yield}</p>
        </a>
        `
        resultsUl.appendChild(li)
    }
}

const handleSearch = e => {
    e.preventDefault()
    const searchedRecipe = searchInput.value
    fetch(`/api/search-recipes?name=${searchedRecipe}`)
    .then(response => response.json())
    .then(results => renderResults(results))
}

form.addEventListener('submit', handleSearch)