const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    releaseDate: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    categories: {
        type: Array,
        required: true
    }
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie