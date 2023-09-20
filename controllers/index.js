const router = require('express').Router()
const viewRoutes = require('./viewRoutes')
// const recipeApiRoutes = require('./api/recipeRoutes')

// api routes
// router.use('/api', recipeApiRoutes)

// page/view routes
router.use('/', viewRoutes)

module.exports = router