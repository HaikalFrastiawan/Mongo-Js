const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movie-db')
    .then(() => {
         console.log("ConnectedDB")
    }).catch(error => console.log("error :",error));
