const router = require('express').Router()
const { User, Recipe, Comment } = require('sequelize')
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


module.exports = router