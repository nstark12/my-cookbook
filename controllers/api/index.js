const router = require('express').Router()
const userRoutes = require('./userRoutes')
const recipeRoutes = require('./recipeRoutes')

router.use('/users', userRoutes)
router.use('/add-recipe', recipeRoutes)

module.exports = router