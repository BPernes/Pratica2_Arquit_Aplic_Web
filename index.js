const express = require('express');
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const Movie = require('./models/movie');
const urlencoded = require('body-parser/lib/types/urlencoded');

mongoose.connect('mongodb://localhost:27017/moviesApp')

app.use(urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname, '/public')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/movies', async (req, res) => {
    const movies = await Movie.find({})

    res.render('movies/index', { movies })
})

app.get('/movies/new', (req, res) => {
    res.render('movies/new')
})

app.post('/movies', async (req, res) => {
    const newMovie = new Movie(req.body)
    await newMovie.save();

    res.redirect(`/movies/${newMovie._id}`)
})

app.get('/movies/:id', async (req,res) => {
    const { id } = req.params
    const foundMovie = await Movie.findById(id)

    res.render('movies/details', { foundMovie })
})

app.get('/movies/:id/edit', async (req, res) => {
    const { id } = req.params
    const foundMovie = await Movie.findById(id)

    res.render('movies/edit', { foundMovie })
})

app.put('/movies/:id', async (req, res) => {
    const { id } = req.params
    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, {runValidators: true, new: true})
    res.redirect(`/movies/${updatedMovie._id}`)
})

app.delete('/movies/:id', async (req, res) => {
    const { id } = req.params
    const deletedMovie = await Movie.findByIdAndDelete(id)

    res.redirect('/movies')
})


app.listen(3000, () => {
    console.log("Server listening on port 3000!")
})
