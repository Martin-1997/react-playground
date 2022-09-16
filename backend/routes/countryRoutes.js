const express = require('express')
// const Country = require('../models/country')



const router = express.Router();

router.get('/countries', (req, res) => {
    // Sort by "name" is ascending order, -1 for descending
    Country.find().sort({ name: 1 }).then((result) => {
        res.send(result)
    }).catch((err) => console.log(err))
})

router.get('/countries/:id', (req, res) => {
    Country.findAll({ where: req.body.id})
    // Country.findById(req.params.id)
    //     .then((result) => {
    //         res.send(result)
    //     }).catch((err) => console.log(err))
})

router.post('/countries', (req, res) => {
   // pool.query()
    // const country = new Country(req.body)
    // country.save().then((result) => {
    //     res.json({ redirect: '/admin' })
    //     res.end()
    // }).catch((err) => console.log(err))
})

router.delete('/countries/:id', (req, res) => {
    const id = req.params.id;
    Country.findByIdAndDelete(id).then((result) => {
        res.json({ redirect: '/admin' })
        res.end()
    }).catch((err) => console.log(err))
})

router.use(express.urlencoded({ extended: true }))
router.post('/countries', (req, res) => {
    // expects data from a http post request like it could be send by html form in the browser
    req.body
})

module.exports = router