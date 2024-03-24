const router = require('express').Router()
const Pokemon = require('../models/Pokemon')

router.get('/', async (req, res) => {
    try {
        const pokemon = await Pokemon.find()
        res.json(pokemon)
    } catch (error) {
        console.log('error fetching all pokemon', error)
        res.status
    }
})

module.exports = router