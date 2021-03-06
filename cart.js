const express = require("express"); 
const cart = express.Router();
const pool = require("./connection");  

// const cartItems = [
//     {
//         id: 1,
//         product: "coffee", 
//         quantity: 10, 
//         price: 5.50, 
        
//     },
//     {
//         id: 2,
//         product: "sugar", 
//         quantity: 5, 
//         price: 1, 
        
//     }, 
//     {
//         id: 3,
//         product: "creamer", 
//         quantity: 2, 
//         price: 3, 
        
//     }  
// ]; 


// 1. GET /cart-items

// cart.get("/", (req, res) =>{
//     res.status(200)
//     res.json(cartItems);
// })

cart.get("/", function(req, res){ 
    pool.query("select * from shopping_cart order by id").then(result =>{
        res.status(200)
        res.json(result.rows); 
    }); 
}); 

// cart.get("/", (req, res) =>{
//     let price = parseInt(req.query.maxPrice); 
//     let filteredPrice = []; 

//     for(let p of price){
//         if(p.price <= price){
//             filteredPrice.push(p); 
//         }
//     }
//     res.json(filteredPrice); 
// })

// cart.get("/", function(req, res){ 
//     let maxPrice = parseFloat(req.query.maxPrice);
//     if (maxPrice) {
//         pool.query("select * from shopping_cart where price<=3.0 order by id").then(result =>{
//         res.json(result.rows); 
//         }); 
//     }; 

// GET /cart-items/:id

// cart.get("/:id", (req, res)=>{
//     // use this id as a way of finding your item
//     console.log(req.params.id); 
//     const item = cartItems.find((c) => c.id === parseInt(req.params.id));
    
//     if(!item){
//         res.status(404).send('ID Not Found'); 
//     } 
//     res.json(item); 
// })

cart.get("/:id", function(req, res){ }); 

// POST /cart-items

// cart.post("/", (req, res)=>{
//    const getLastId = cartItems.length +1; 
   
//     let newItem = {
//         id: getLastId,   
//         product: req.body.product,  
//         quantity: parseInt(req.body.quantity), 
//         price: parseInt(req.body.price)
//     }

//     cartItems.push(newItem); 
//     res.status(201); 
//     res.json(cartItems); 
// })

cart.post("/", function(req, res){ }); 

// PUT /cart-items/:id

// cart.put("/:id", (req, res)=>{
//     const index = cartItems.findIndex((item) => item.id === parseInt(req.params.id)); 
//     const newCart = req.body; 

//     cartItems.splice(index, 1, newCart); 
//     res.status(200); 
//     res.json(newCart); 
// })
cart.put("/:id", function(req, res){ }); 
// DELETE /cart-items/:id

// cart.delete("/:id", (req, res)=> {
//     const index = cartItems.findIndex((item) => item.id === parseInt(req.params.id)); 
    
//     cartItems.splice(index, 1);
//     res.status(204); 
//     res.json("Empty");
// })

cart.delete("/:id", function(req, res){ }); 

module.exports = cart;