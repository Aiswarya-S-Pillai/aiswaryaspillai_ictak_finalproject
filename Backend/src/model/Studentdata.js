const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakprojectfiles.5xd5x.mongodb.net/FINALAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewStudentSchema = new Schema({
    studentId : String,
    studentName : String,
    book : String,
    genre : String,
    country : String,
    price : String,
    starRating :String,
  
});

var Studentdata = mongoose.model('student', NewStudentSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Studentdata;