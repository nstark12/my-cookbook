const router = require('express').Router()
const path = require('path')
const { writeFileSync, readFileSync } = require('fs')
const dataPath = path.join(__dirname, '..', 'data', 'recipes.json')
const { generateId } = require('../utils/generateId')
const readAndParseFile = require('../utils/readAndParseFile')

// API Routes
router.get('/all-recipes', (req, res) => {
    const recipes = readAndParseFile(dataPath)
    res.json(recipes)
})

// ?name=Recipe Query Parameter
router.get('/search-recipes', (req, res) => {
    const recipes = readAndParseFile(dataPath)
    const searchedRecipe = req.query.name
    const results = recipes.filter(recipe => {
        const formattedSearchedRecipe = searchedRecipe.toLowerCase().trim()
        const formattedRecipeName = recipe.name.toLowerCase().trim()
        return formattedRecipeName.includes(formattedSearchedRecipe)
    })
    res.json(results)
})

// Add new recipe
router.post('/add-recipe', async (req, res) => {
    if (!req.body || !req.body.name || !req.body.category || !req.body.allergy-friendly || !req.body.yield || !req.body.ingredients || !req.body.instructions) {
        return res.status(400).json('Please enter all required fields')
    }

    // Read and parse file contents
    const recipes = readAndParseFile(dataPath)
    console.log(recipes)

    // Add new data to the array
    const newRecipe = {
        ...req.body,
        id: generateId()
    }

    recipes.push(newRecipe)

    // Save file
    writeFileSync(dataPath, JSON.stringify(recipes, null, 2))
    res.status(201).json(newPet)
})

module.exports = router