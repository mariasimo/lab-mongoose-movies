const mongoose = require('mongoose');
const Schema = mongoose.Schema

const MovieSchema = new Schema({
    title : String,
    genre : String,
    plot : String
})

const Model = mongoose.model("movies", MovieSchema);
module.exports = Model;