import React, { useState } from 'react';
import './App.css';
 import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Header from './Components/Header';
import BottomMenu from './Components/BottomMenu';
import Basket from './Components/Basket';
import simpleContext from './context';
import Products from './Components/Products';
import LastNews from './Components/LastNews';
import Footer from './Components/Footer';
import About from './Components/About';
import { Route, Routes } from 'react-router';
import Wishlist from './Components/Wishlist';
import Compare from './Components/Compare';
import AllProducts from './Components/AllProducts';
import Sigin from './Components/Sigin';
import CreateAccount from './Components/CreacteAccount';
const App = () => {
  const [basket,setbasket]=useState(true);
  const [favorites,setfavorites]=useState([]);
  const [basketProducts,setbasketProducts]=useState([])
  const [price,setprice]=useState(0);
  const [products,setproducts]=useState([{
    id:1,
    name:"Josetfa Queen Size",
    favorite:false,
    price:199.0,n:0,
    },{
    id:2,
    name:"Twist Dining Table",
    favorite:false,
    price:288.0,n:0,
  },{
    id:3,
    name:"Variable Prodcts",
    price:69.0,n:0,
  },{
    id:4,
    name:"Round Dining Table",
    favorite:false,
    price:201.0,n:0,
  },
  {
    id:5,
    name:"Josetfa Queen Size",
    favorite:false,
    price:199.0,n:0,
  },{
    id:6,
    name:"Twist Dining Table",
    favorite:false,
    price:288.0,n:0,
  },{
    id:7,
    name:"Variable Prodcts",
    favorite:false,
    price:69.0,n:0,
  },{
    id:8,
    name:"Round Dining Table",
    favorite:false,
    price:201.0,n:0,
  },{
    id:9,
    name:"Josetfa Queen Size",
    favorite:false,
    price:199.0,n:0,
  },{
    id:10,
    name:"Twist Dining Table",
    favorite:false,
    price:288.0,n:0,
  },{
    id:11,
    name:"Twist Dining Table",
    favorite:false,
    price:288.0,n:0,
  },{
    id:12,
    name:"Round Dining Table",
    price:201.0,
    favorite:false,n:0,
  },{
    id:13,
    name:"Josetfa Queen Size",
    price:199.0,
    favorite:false,n:0,

  },{
    id:14,
    name:"Twist Dining Table",
    price:288.0,
    favorite:false},{
    id:15,
    name:"Round Dining Table",
    price:201.0,
    favorite:false,n:0,
  },{
    id:16,
    name:"Josetfa Queen Size",
    price:199.0,
    favorite:false,n:0,

  },{
    id:17,
    name:"Twist Dining Table",
    price:288.0,
    favorite:false,n:0,
  },{
    id:18,
    name:"Twist Dining Table",
    favorite:false,
    price:288.0,n:0,
  },{
    id:19,
    name:"Round Dining Table",
    price:201.0,
    favorite:false,n:0,
  },{
    id:20,
    name:"Josetfa Queen Size",
    price:199.0,
    favorite:false,n:0,
  },
])
  return (  
    <simpleContext.Provider value={{setbasketProducts:setbasketProducts,basketProducts:basketProducts,basket:basket,
      setbasket:setbasket,
      products:products,
    setproducts:setproducts,
    favorites:favorites,setfavorites:setfavorites,price:price,setprice:setprice}}>
      <Header/>
      <Basket/> 
      <Routes>
      <Route path="/" element={<div>
      <Products/>
      <LastNews/>
          </div>} />
          <Route path='/about' element={  <About/>}/>
          <Route path='/wishlist' element={<Wishlist/>}></Route>
          <Route path='/compare' element={<Compare/>}></Route>
            <Route path='/allproducts' element={<AllProducts/>}></Route>
            <Route path='/createAccount' element={<CreateAccount/>}></Route>
          <Route path='/account' element={<Sigin/>}></Route>
        </Routes>
      <Footer/>
      <BottomMenu/>

    </simpleContext.Provider>
  );
}
export default App;
