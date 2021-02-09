const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakprojectfiles.5xd5x.mongodb.net/FINALAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewSignupSchema = new Schema({
    name: String,
    email : String,
    username:String,
    password : String,
    confirmpassword : String,
    
});

var Signupdata = mongoose.model('signup', NewSignupSchema);                        

module.exports = Signupdata;