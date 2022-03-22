import React, {useState} from 'react';
import Filter from './Components/Filter';
import './styles.css';
import Products from './Components/Product_Slider';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';


// const fs = require('casual');
// const {
//     application
// } = require('express');
// const express = require('express');
// const {
//     format
// } = require('path');
// const port = process.env.PORT || 3000;

// const app = express();

// app.use(function (req, res, next) {
//     // console.log("Middleware called");
//     next();
//   });

// //API Middleware
// app.use(express.json()); //accepts data in JSON format

// app.use(express.urlencoded({
//     extended: false
// })); //reads the form

// // app.use(express.static("data")); //serves public folder as a static folder



// //API Routes
// var data = fs.readFileSync('testy.json', 'utf8', function (err, data) {});



// app.get('/', (req, res) => {
//     res.send(data);

//     try {
//       data = JSON.parse(data)
//       console.log(data)
//   } catch (e) {
//       return data
//   }
// })

// app.get('/filter', (req, res) => {
//     const arr3 = data.filter(function(item){
//     return item.name == "Steven Gaston";         
// })
// res.send(arr3);
// })

// app.listen(8000, () => {
//     console.log(`console server listening on port 4000`)
// })



function App() {
    
 
  return (
    <>

   <Navbar/>
    <Products/>
 <Footer/>

 


    </>
  );
}

export default App;
