const express = require('express')
const Country = require('../models/country')

const router = express.Router();

// Query settings
https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

router.get('/countries/:id', (req, res) => {
    Country.findAll({ where: {
        id: req.params.id
    }}).then((result) => {
        res.send(result)
    }).catch((err) => console.log(err))
})

router.get('/countries', (req, res) => {
    Country.findAll().then((result) => {
        res.send(result)
    }).catch((err) => console.log(err))
})

router.use(express.urlencoded({ extended: true }))
router.post('/countries', (req, res) => {
    Country.create({ name: req.query.name }).then((result) => {
        res.send(result)
    }).catch((err) => console.log(err));
})

router.delete('/countries/:id', (req, res) => {
    const id = req.params.id;
    Country.destroy({
        where: {
            id: id
        }
    }).then((result) => {
        console.log(result)
        res.send(200)
    }).catch((err) => console.log(err))
})

module.exports = router