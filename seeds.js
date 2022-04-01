const mongoose = require('mongoose')
const Movie = require('./models/movie')

mongoose.connect('mongodb://localhost:27017/moviesApp');

const seedMovies = [
    {
        title: "The Godfather",
        synopsis: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son",
        duration: "2 hours 55 minutes",
        releaseDate: "March 24, 1972 (United States)",
        image: "https://uauposters.com.br/media/catalog/product/cache/1/image/333x500/9df78eab33525d08d6e5fb8d27136e95/5/1/518020201013-uau-posters-filmes-mafia-the-godfather-o-poderoso-chefao.jpg",
        categories: ["Crime", "Drama"]
    },
    {
        title: "Fight Club",
        synopsis: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        duration: "2 hours 19 minutes",
        releaseDate: "October 15, 1999 (United States)",
        image: "https://filipamoreno.files.wordpress.com/2017/07/mv5bmjjmytnknmityjyyzc00mguxlwjhnwmtzdy4nzc1mdawmzu5xkeyxkfqcgdeqxvynzkwmjq5nzm-_v1_sy1000_cr006761000_al_.jpg",
        categories: ["Drama"]
    },
    {
        title: "Moonlight",
        synopsis: "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
        duration: "1 hours 51 minutes",
        releaseDate: "November 18, 2016 (United States)",
        image: "https://upload.wikimedia.org/wikipedia/pt/f/f3/Moonlight_%28filme%29.png",
        categories: ["Drama"]
    },
]

Movie.insertMany(seedMovies)
    .then( res => {
        console.log(res)
    })
    .catch( err => {
        console.log(err)
    })