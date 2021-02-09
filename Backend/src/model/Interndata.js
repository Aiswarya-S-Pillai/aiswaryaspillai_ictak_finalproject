const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakprojectfiles.5xd5x.mongodb.net/FINALAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewInternSchema = new Schema({
    internId : String,
    internName : String,
    book : String,
    genre : String,
    country : String,
    price : String,
    starRating :String,
  
});

var Interndata = mongoose.model('intern', NewInternSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Interndata;