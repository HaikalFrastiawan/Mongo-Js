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
});

const Movie = mongoose.model('Movie', movieSchema);

// Pastikan pakai ObjectId yang valid dari database kamu
Movie.findOne({ _id: '68b83828369f8d1e5f12915e' }) 
    .then(response => console.log("Movie ditemukan:", response))
    .catch(error => console.log("Error:", error));
