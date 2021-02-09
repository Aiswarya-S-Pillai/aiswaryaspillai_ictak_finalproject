const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakprojectfiles.5xd5x.mongodb.net/FINALAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewFeedbackSchema = new Schema({
    
    feedbackName : String,
    book : String,
    genre : String,
    country : String,
    price : String,
    starRating :Number,
    
});

var Feedbackdata = mongoose.model('feedback', NewFeedbackSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Feedbackdata;