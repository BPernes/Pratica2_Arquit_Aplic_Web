const express = require('express');
const app = express()
const path = require('path')
const mongoose = require('mongoose')

const Movie = require('./models/movie')



mongoose.connect('mongodb://localhost:27017/moviesApp')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/movies', async (req, res) => {
    const movies = await Movie.find({})
    res.render('movies/index', { movies })
})

app.listen(3000, () => {
    console.log("Server listening on port 3000!")
})
