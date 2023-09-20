const sequelize = require('../config/connection')
const { User, Recipe, Comment} = require('../models')

const userData = require('./userData.json')
const recipeData = require('./recipeSeeds.json')
const commentData = require('./commentSeeds.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true })
    for (const user of userData) {
        await User.create(user)
    }

    await Recipe.bulkCreate(recipeData, {
        individualHooks: true,
        returning: true
    })

    await Comment.bulkCreate(commentData, {
        individualHooks: true,
        returning: true
    })

    process.exit(0)
}

seedDatabase()