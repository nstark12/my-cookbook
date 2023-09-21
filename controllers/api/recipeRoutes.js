const router = require('express').Router()
const { Recipe, User, Comment } = require('../../models')

router.get('/', async (req, res) => {
    try {
        const postedRecipes = await Recipe.findAll({
            include: [
                {
                    model: Comment,
                    include: [{ model: User }]
                }
            ]
        })

        const recipes = postedRecipes.map((recipe) => recipe.get({ plain: true }))
        res.status(200).json({ recipes })

    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    include: [
                        { model: User }
                    ]
                }
            ]
        })
        const singleRecipe = await recipe.get({ plain: true })
        res.status(200).json(singleRecipe)
    } catch(err) {
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const recipe = await Recipe.create({
            // name: req.body.name,
            // category: req.body.category,
            // allergens: req.body.allergens,
            // yield: req.body.yield,
            // description: req.body.description,
            // preptime: req.body.preptime,
            // cooktime: req.body.cooktime,
            // totaltime: req.body.totaltime,
            // ingredients: req.body.ingredients,
            // instructions: req.body.instructions,
            // notes: req.body.notes,
            // calories: req.body.calories,
            // fat: req.body.fat,
            // carbs: req.body.carbs,
            // protein: req.body.protein,
            ...req.body,
            user_id: req.session.user_id
        })
        res.status(201).json({ recipe, message: `Recipe Created` })
    } catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
})



module.exports = router