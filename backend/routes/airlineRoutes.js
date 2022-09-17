const express = require('express')
const Airline = require('../models/airline')

const router = express.Router();

// Query settings
https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

router.get('/airlines/:id', (req, res) => {
    Airline.findAll({ where: {
        id: req.params.id
    }}).then((result) => {
        res.send(result)
    }).catch((err) => console.log(err))
})

router.get('/airlines', (req, res) => {
    Airline.findAll().then((result) => {
        res.send(result)
    }).catch((err) => console.log(err))
})

router.use(express.urlencoded({ extended: true }))
router.post('/airlines', (req, res) => {
    Airline.create({ 
        name: req.query.name,
        countryID : req.query.countryID
     }).then((result) => {
        res.send(result)
    }).catch((err) => console.log(err));
})

router.delete('/airlines/:id', (req, res) => {
    const id = req.params.id;
    Airline.destroy({
        where: {
            id: id
        }
    }).then((result) => {
        console.log(result)
        res.send(200)
    }).catch((err) => console.log(err))
})

module.exports = router