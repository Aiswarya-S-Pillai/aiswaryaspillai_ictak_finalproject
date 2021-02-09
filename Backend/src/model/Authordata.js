const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakprojectfiles.5xd5x.mongodb.net/FINALAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewAuthorSchema = new Schema({
    authorId :String,
    authorName : String,
    book : String,
    genre : String,
    country : String,
    price : String,
    starRating :Number,
    imageUrl : String
});

var Authordata = mongoose.model('author', NewAuthorSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Authordata;