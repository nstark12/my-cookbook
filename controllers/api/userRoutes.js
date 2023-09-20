const router = require('express').Router()
const { User } = require('sequelize')

router.get('/current', async (req, res) => {
    res.json({ user_id: req.session.user_id, username: req.session.username })
    console.log('!!!!!!!!!!', req, res)
})

router.post('/', async (req, res) => {
    try {
        
    } catch(err) {
        console.log(err)
        res.status(401).json(err)
    }
})

module.exports = router