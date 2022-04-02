const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    synopsis: {
        type: String,
    },
    duration: {
        type: String,
    },
    releaseDate: {
        type: String,
    },
    image: {
        type: String,
    },
    categories: {
        type: Array,
    }
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie