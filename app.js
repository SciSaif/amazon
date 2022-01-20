const express = require("express");
const bodyParser = require("body-parser");
const ejs=require("ejs");
const app = express();

var products=[
  {
            _id:"1",
            name:"Kashmiri shawll",
            category:"shawll",
            image:"images/p1.jpg",
            price:63,
            brand:"Riemarts",
            rating:3.5,
            numReviews:11,
            countInStock:7,
  },

  {
            _id:"2",
            name:"Kashmiri shawll",
            category:"shawll",
            image:"images/p2.jpg",
            price:45,
            brand:"Riemarts",
            rating:4.5,
            numReviews:7,
            countInStock:9,
        },

        {
            _id:"3",
            name:"Kashmiri shawll",
            category:"shawll",
            image:"images/p3.jpg",
            price:83,
            brand:"Riemarts",
            rating:4.5,
            numReviews:7,
            countInStock:66,
        },

        {
            _id:"4",
            name:"Kashmiri shawll",
            category:"shawll",
            image:"images/p4.jpg",
            price:42,
            brand:"Riemarts",
            rating:3,
            numReviews:43,
            countInStock:9,
        },

        {
            _id:"5",
            name:"Kashmiri shawll",
            category:"shawll",
            image:"images/p5.jpg",
            price:39,
            brand:"Riemarts",
            rating:5,
            numReviews:8,
            countInStock:1,
        },

        {
            _id:"6",
            name:"Kashmiri shawll",
            category:"shawll",
            image:"images/p6.jpg",
            price:45,
            brand:"Riemarts",
            rating:1.5,
            numReviews:10,
            countInStock:6,
        },

];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("home",{products:products});
});


app.get("/products/:_id",function(req,res){
const id=req.params._id;

  //for(var i=0;i<products.length;i++){
  //if(id===products[i]._id){
    res.render("products");
  //}}
});

app.listen(5000,function(){
  console.log("server is running at port 5000");
});
