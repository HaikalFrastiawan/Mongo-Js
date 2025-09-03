const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movie-db')
    .then(() => {
         console.log("ConnectedDB")
    }).catch(error => console.log("error :",error));


const movieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    year: Number,
    rating: Number,
    director: String
})

const Movie = mongoose.model('Movie', movieSchema)

// const movie = new Movie ({
//     title: 'Spiderman',
//     genre: 'action',
//     year: 2025,
//     rating: 10,
//     director: 'Repan'
// })

// Insert 1 data
const movie = new Movie({
    title: 'Spiderman',
    year: 2025,
    rating: 10,
    director: 'Repan',
    genre: 'Action'
});

movie.save()
    .then(res => {
        console.log("One movie inserted:", res);
    })
    .catch(err => console.log("Error:", err));


// Insert banyak data
const movies = [
    { title: 'Batman', year: 2024, rating: 9, director: 'Nolan', genre: 'Action' },
    { title: 'Iron Man', year: 2008, rating: 8.5, director: 'Jon Favreau', genre: 'Sci-Fi' },
    { title: 'Avengers', year: 2012, rating: 9.2, director: 'Joss Whedon', genre: 'Action' },
    { title: 'Doctor Strange', year: 2016, rating: 8.7, director: 'Scott Derrickson', genre: 'Fantasy' }
];

Movie.insertMany(movies)
    .then(res => {
        console.log("it's Work:", res);
    })
    .catch(err => {
        console.log("Error inserting movies:", err);
    });




console.log(movie)