const router = require('express').Router();
const {  Recommendation, Picture, Trip } = require('../models');

//working on continent route that calls on either ID or name for each continent
//router.get('/Continent/:id', async (req, res) => {
// add 'Continent' to above const based off what routes we do
router.get('/africa', async (req, res) => {
    Trip.findAll({
        include: [{model: Recommendation}, {model: Picture}]
    }).then (results => {
        const newResults = results.map(trip => trip.get({ plain: true }))
        console.log(newResults)
        res.render('africa');
    })
})

//id?
router.get('/europe', async (req, res) => {
    Trip.findAll({
        include: [{model: Recommendation}, {model: Picture}]
    }).then (results => {
        const newResults = results.map(trip => trip.get({ plain: true }))
        console.log(newResults)
        res.render('europe');
    })
})

router.get('/asia', async (req, res) => {
    Trip.findAll({
        include: [{model: Recommendation}, {model: Picture}]
    }).then (results => {
        const newResults = results.map(trip => trip.get({ plain: true }))
        console.log(newResults)
        res.render('asia');
    })
})

router.get('/oceania', async (req, res) => {
    Trip.findAll({
        include: [{model: Recommendation}, {model: Picture}]
    }).then (results => {
        const newResults = results.map(trip => trip.get({ plain: true }))
        console.log(newResults)
        res.render('oceania');
    })
})

router.get('/northAmerica', async (req, res) => {
    Trip.findAll({
        include: [{model: Recommendation}, {model: Picture}]
    }).then (results => {
        const newResults = results.map(trip => trip.get({ plain: true }))
        console.log(newResults)
        res.render('northAmerica');
    })
})

router.get('/southAmerica', async (req, res) => {
    Trip.findAll({
        include: [{model: Recommendation}, {model: Picture}]
    }).then (results => {
        const newResults = results.map(trip => trip.get({ plain: true }))
        console.log(newResults)
        res.render('southAmerica');
    })
})


module.exports = router