const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movie-db')
    .then(() => {
         console.log("ConnectedDB")
    }).catch(error => console.log("error :",error));


const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    director: String
})

const Movie = mongoose.model('Movie', movieSchema)

const movie = new Movie ({
    title: 'Spiderman',
    year: 2025,
    score: 10,
    director: 'Repan'
})

movie.save() //untuk menyimpan ke mongo-db

console.log(movie)