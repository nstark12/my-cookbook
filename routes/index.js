const router = require('express').Router()
const viewRoutes = require('./views')
const recipeApiRoutes = require('./recipes')

// api routes
router.use('/api', recipeApiRoutes)

// page/view routes
router.use('/', viewRoutes)

module.exports = router