const router = require('express').Router()
const path = require('path')

router.get('/recipe-book', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'recipe-book.html'))
})

router.get('/add-recipe', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'add-recipe.html'))
})


module.exports = router