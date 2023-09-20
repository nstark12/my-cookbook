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


module.exports = router