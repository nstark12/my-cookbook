const router = require('express').Router()
const { User, Recipe, Comment } = require('../models')
const withAuth = require('../utils/auth')

router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password']},
            order: [['username', 'ASC']],
        })

        const users = userData.map((project) => project.get({ plain: true }))

        res.render('homepage', {
            users,
            logged_in: req.session.logged_in
        })

    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.get('/recipes/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findOne({
            where: {id: req.params.id},
            include: [
                User,
                {
                    model: Comment,
                    include: [User]
                }
            ]
        })

        let singleRecipe = recipe.get({ plain: true })
        res.render('recipe', {
            singleRecipe,
            logged_in: req.session.logged_in
        })
    } catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  // signup route
router.get('/signup', (req, res) => {
    try{
      if (req.session.loggedIn) {
        res.redirect('/')
        return
      }
  
      res.render('signup')
    } catch(err) {
      res.status(500).json(err)
    }
  })

  router.get('/recipe-book', async (req, res) => {
    const user_id = req.session.user_id
    
    if(!user_id) {
        res.redirect('/login')
    }

    try {
        const user = await User.findByPk(user_id, {
            raw: true
        })

        const recipes = await Recipe.findAll({
            where: {
                user_id
            },
            raw: true
        })

        const comments = await Comment.findAll({
            where: {
                user_id
            },
            raw: true
        })

        res.render('recipe-book', {...user, recipes, comments, logged_in: req.session.logged_in})

    } catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
  })

  router.get('/add-recipe', (req, res) => {
    try {
        res.render('add-recipe', {logged_in: req.session.logged_in})
    } catch(err) {
        res.status(500).json(err)
    }
  })


module.exports = router