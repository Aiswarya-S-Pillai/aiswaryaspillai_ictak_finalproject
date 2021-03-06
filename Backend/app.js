const express = require('express');
const ProductData = require('./src/model/Productdata');
const AuthorData = require('./src/model/Authordata');
const SignupData=require('./src/model/Signupdata');
const StudentData=require('./src/model/Studentdata');
const FeedbackData=require('./src/model/Feedbackdata');
const InternData=require('./src/model/Interndata');
const nodemailer = require('nodemailer');
//const user = require('./src/model/user');
const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(bodyparser.json());
email='admin@gmail.com';
password='admin@1234';

username='expert@gmail.com';
password1='expert@1234';



function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }

app.post('/insert',verifyToken,function(req,res){
   
    console.log(req.body);
   
    var product = {       
        productId : req.body.product.productId,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl,
   }       
   var product = new ProductData(product);
   product.save();
});
////////////////////////////////////
app.post('/insertauthor',verifyToken,function(req,res){
   
  console.log(req.body);
 
var author = {       
            authorId : req.body.author.authorId,
            authorName : req.body.author.authorName,
            book : req.body.author.book,
            genre: req.body.author.genre,
            country : req.body.author.country,
            price : req.body.author.price,
            starRating : req.body.author.starRating,
            imageUrl : req.body.author.imageUrl,
}       
var author = new AuthorData(author);
author.save();
});
////////////////////////////////////////////
app.post('/insertstudent',verifyToken,function(req,res){
   
  console.log(req.body);
 
var student = {       
            studentId : req.body.student.studentId,
            studentName : req.body.student.studentName,
            book : req.body.student.book,
            genre: req.body.student.genre,
            country : req.body.student.country,
            price : req.body.student.price,
            starRating : req.body.student.starRating,
            imageUrl : req.body.student.imageUrl,
}       
var student = new StudentData(student);
student.save();
});
////////////////////////////////////////////////////
app.post('/insertintern',verifyToken,function(req,res){
   
  console.log(req.body);
 
var intern = {       
            internId : req.body.intern.internId,
            internName : req.body.intern.internName,
            book : req.body.intern.book,
            genre: req.body.intern.genre,
            country : req.body.intern.country,
            price : req.body.intern.price,
            starRating : req.body.intern.starRating,
            imageUrl : req.body.intern.imageUrl,
}       
var intern = new InternData(intern);
intern.save();
});
///////////////////////////////////////////////////////

app.post('/insertfeedback',verifyToken,function(req,res){
   
  console.log(req.body);
 
var feedback = {       
            
            feedbackName : req.body.feedback.feedbackName,
            book : req.body.feedback.book,
            genre: req.body.feedback.genre,
            country : req.body.feedback.country,
            price : req.body.feedback.price,
            starRating : req.body.feedback.starRating,
            
}       
var feedback = new FeedbackData(feedback);
feedback.save();
});
////////////////////////////////////
app.post('/studentlogin',function(req,res){
  
  console.log(req.body);
  let username1 =req.body.uname;
  let password1 =req.body.password;   

 SignupData.findOne({username:username1})
 .then(function(signup){
       if(signup.password == password1)
       {
        console.log('Valid User!');
        let payload = {subject: username1 + password1};
        let token = jwt.sign(payload,'secretKey');
        res.status(200).send({token});
         }

       else{
          res.status(401).send('Invalid Credentials');
          }
  })
  .catch( ()=> {

          res.status(401).send('User not found! Please SIGN UP!');
});
})



////////////////////////////////////////////////////
app.post('/insertsignup',function(req,res){
   
  console.log(req.body);
 
var signup = {       
            name : req.body.signup.name,
            email : req.body.signup.email,
            password : req.body.signup.password,
            confirmPassword: req.body.signup.confirmPassword,
            username : req.body.signup.username,
            
}       
var signup = new SignupData(signup);
signup.save();
});
///////////////////////////////////////
app.get('/products',function(req,res){
    
    ProductData.find()
                .then(function(products){
                    res.send(products);
                });
});
//////////////////////////////////////////
app.get('/signups',function(req,res){
    
  SignupData.find()
              .then(function(signups){
                  res.send(signups);
              });
});
////////////////////////////////////////

app.get('/authors',function(req,res){

AuthorData.find()
          .then(function(authors){
              res.send(authors);
          });
});
//////////////////////////////////
app.get('/feedbacks',function(req,res){

  FeedbackData.find()
            .then(function(feedbacks){
                res.send(feedbacks);
            });
  });
/////////////////////////////////
app.get('/students',function(req,res){

  StudentData.find()
            .then(function(students){
                res.send(students);
            });
  });
//////////////////////////////////
app.get('/interns',function(req,res){

  InternData.find()
            .then(function(interns){
                res.send(interns);
            });
  });
////////////////////////////////
app.get('/product/:id',  (req, res) => {
  
  const id = req.params.id;
    ProductData.findOne({"_id":id})
    .then((product)=>{
        res.send(product);
    });
})


app.post('/login', (req, res) => {
    let userData = req.body
    
      
        if (email!== userData.email) {
          res.status(401).send('Invalid Username')
        } else 
        if ( password !== userData.password) {
          res.status(422).send('Invalid Password')
        } else {
          let payload = {subject: email+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      
    })
// ////////////////////////////////////////////////

app.post('/expertlogin',(req,res) => {

  let userData = req.body;

  if(username !== userData.email){
      res.status(401).send('Invalid Username');
  }
  else if (password1 !== userData.password){
      res.status(422).send('Invalid Password');
  }
  else{
      console.log('Validation Success!');
      let payload = {subject: username + password1};
      let token = jwt.sign(payload,'secretKey');
      res.status(200).send({token});
  }
});


//////////////////////////////////////////////////
    app.put('/update',(req,res)=>{
      console.log(req.body)
      id=req.body._id,
      productId= req.body.productId,
      productName = req.body.productName,
      productCode = req.body.productCode,
      releaseDate = req.body.releaseDate,
      description = req.body.description,
      price = req.body.price,
      starRating = req.body.starRating,
      imageUrl = req.body.imageUrl
     ProductData.findByIdAndUpdate({"_id":id},
                                  {$set:{"productId":productId,
                                  "productName":productName,
                                  "productCode":productCode,
                                  "releaseDate":releaseDate,
                                  "description":description,
                                  "price":price,
                                  "starRating":starRating,
                                  "imageUrl":imageUrl}})
     .then(function(){
         res.send();
     })
   })
   //////////////////////////////////////////////////
   app.get('/author/:id',  (req, res) => {

    const id = req.params.id;
    AuthorData.findOne({"_id":id})
    .then((author)=>{
      res.send(author);
    });
    })
    /////////////////////////////////////////
    app.get('/student/:id',  (req, res) => {

      const id = req.params.id;
      StudentData.findOne({"_id":id})
      .then((student)=>{
        res.send(student);
      });
      })
      ///////////////////////////////
      app.get('/intern/:id',  (req, res) => {

        const id = req.params.id;
        InternData.findOne({"_id":id})
        .then((intern)=>{
          res.send(intern);
        });
        })
///////////////////////////////////////////////
app.get('/feedback/:id',  (req, res) => {

  const id = req.params.id;
  FeedbackData.findOne({"_id":id})
  .then((feedback)=>{
    res.send(feedback);
  });
  })



    
    /////////////////////////////////////////////////
    app.put('/updateauthor',(req,res)=>{
      console.log(req.body)
      id=req.body._id,
            authorId= req.body.authorId,
            authorName = req.body.authorName,
            book = req.body.book,
            genre= req.body.genre,
            country = req.body.country,
            price = req.body.price,
            starRating = req.body.starRating,
            imageUrl = req.body.imageUrl
      AuthorData.findByIdAndUpdate({"_id":id},
      {$set:{"authorId":authorId,
      "authorName":authorName,
      "book":book,
      "genre":genre,
      "country":country,
      "price":price,
      "starRating":starRating,
      "imageUrl":imageUrl}})
      .then(function(){
         res.send();
      })
      })
      //////////////////////////////////////////////
      

app.delete('/remove/:id',(req,res)=>{
   
     id = req.params.id;
     ProductData.findByIdAndDelete({"_id":id})
     .then(()=>{
         console.log('success')
         res.send();
     })
   })
     
// // ////////////////////////////////////////

app.delete('/removeauthor/:id',(req,res)=>{

  id = req.params.id;
  AuthorData.findByIdAndDelete({"_id":id})
  .then(()=>{
     console.log('success')
     res.send();
  })
  })

  app.delete('/removestudent/:id',(req,res)=>{

    id = req.params.id;
    StudentData.findByIdAndDelete({"_id":id})
    .then(()=>{
       console.log('success')
       res.send();
    })
    })
    ////////////////////////////////
    app.delete('/removeintern/:id',(req,res)=>{

      id = req.params.id;
      InternData.findByIdAndDelete({"_id":id})
      .then(()=>{
         console.log('success')
         res.send();
      })
      })
//////////////////////////////////////////////
app.post('/email',function(req,res){
  console.log(req.body);
  console.log("email"+req.body.email);
  mail=req.body.email;
  console.log("matter"+req.body.subject);
  sub=req.body.subject;
  console.log("matter"+req.body.matter);
  content=req.body.matter;
  var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
  
      user: req.body.mail,
      pass: req.body.pass
      }
    });
    
    var mailOptions = {
      
      from: req.body.mail,
      to: req.body.email,
      subject: req.body.subject,
      text: req.body.matter
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
})

// // ////////////////////////////////////////////
app.listen(3000, function(){
    console.log('listening to port 3000');
});

