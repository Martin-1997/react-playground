const express = require('express')
const Airport = require('../models/airport')

const router = express.Router();

// Query settings
https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

router.get('/airports/:id', (req, res) => {
    Airport.findAll({ where: {
        id: req.params.id
    }}).then((result) => {
        res.send(result)
    }).catch((err) => console.log(err))
})

router.get('/airports', (req, res) => {
    Airport.findAll().then((result) => {
        res.send(result)
    }).catch((err) => console.log(err))
})

router.use(express.urlencoded({ extended: true }))
router.post('/airports', (req, res) => {
    Airport.create({ 
        name: req.query.name,
        short_name: req.query.short_name,
        city : req.query.city,
        countryID : req.query.countryID
     }).then((result) => {
        res.send(result)
    }).catch((err) => console.log(err));
})

router.delete('/airports/:id', (req, res) => {
    const id = req.params.id;
    Airport.destroy({
        where: {
            id: id
        }
    }).then((result) => {
        console.log(result)
        res.send(200)
    }).catch((err) => console.log(err))
})

module.exports = router