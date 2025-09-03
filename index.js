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

// async function seedMovies() {
//     try {
//         // Hapus semua data lama dulu
//         await Movie.deleteMany({});

//         // Insert data baru (rapih, tanpa duplikat)
//         await Movie.insertMany([
//             { title: 'Spiderman', genre: 'Action', year: 2025, rating: 10, director: 'Repan' },
//             { title: 'Batman', genre: 'Action', year: 2024, rating: 9, director: 'Nolan' },
//             { title: 'Iron Man', genre: 'Sci-Fi', year: 2008, rating: 8.5, director: 'Jon Favreau' },
//             { title: 'Avengers', genre: 'Action', year: 2012, rating: 9.2, director: 'Joss Whedon' },
//             { title: 'Doctor Strange', genre: 'Fantasy', year: 2016, rating: 8.7, director: 'Scott Derrickson' }
//         ]);

//         console.log("Database sudah diisi ulang dengan data bersih ✅");
//     } catch (err) {
//         console.error("Error seeding movies:", err);
//     } finally {
//         mongoose.connection.close();
//     }
// }
// seedMovies();




// // find movie by id
// Movie.findOne({ _id: '68b83828369f8d1e5f12915e' }) 
//     .then(response => console.log("Movie ditemukan:", response))
//     .catch(error => console.log("Error findOne:", error));

// // updateOne -> update rating Avengers jadi 7
// Movie.updateOne({ title: 'Avengers' }, { rating: 7 })
//     .then(response => console.log("Update result:", response))
//     .catch(error => console.log("Error updateOne:", error));

// //  //updateMany
// Movie.updateMany({year: {$lte: 2018}}, {rating:9.5}).then(response => console.log(response))
// .catch(error => console.log("error :",error))

Movie