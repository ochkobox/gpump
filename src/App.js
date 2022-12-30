import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import ASIC from "./pages/Asic";
import ANTMINER from "./pages/Ant-miner";
import Videocards from "./pages/Videocards";
import MiningFarms from "./pages/Mining-farms";
import NoPage from "./pages/NoPage";
import Homepage from './pages/home';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Checkout from './pages/Checkout'
//import data from './data/Products';
import { useState ,useEffect } from 'react';
import SingleProductPage from "./pages/SingleProductPage";
//import axios from "axios";



function App() {
  
  const [cartItems, setCartItems] = useState(false); 
  const [products, setProducts] = useState([
    {
      name: "",
      category: "",
      brand: "",
      description: "",
      price: "",
      img_url: ""
    }
  ]);

  useEffect(() => {
    fetch("http://localhost:5001/api")
    .then(res => res.json())
    .then(jsonRes => setProducts(jsonRes));
  },[])

  

 


  const onAdd = (product) => {
    const ProdExist = cartItems.find((x) => x._id === product._id);
    if(ProdExist){
      const newCartItems = cartItems.map((x) =>
      x._id === product._id ? { ...ProdExist, qty: ProdExist.qty + 1} : x);
      setCartItems(newCartItems);
      localStorage.setItem('cartItems' , JSON.stringify(newCartItems));
    }
    else {
      const newCartItems = [...cartItems, {...product, qty: 1}];
      setCartItems(newCartItems);
      localStorage.setItem('cartItems' , JSON.stringify(newCartItems));
    }
  };
  const onRemove = (product) => {
    const ProdExist = cartItems.find((x) => x._id === product._id);
    if (ProdExist.qty === 1){
      const newCartItems = cartItems.filter((x) => x._id !== product._id);
      setCartItems(newCartItems);
      localStorage.setItem('cartItems' , JSON.stringify(newCartItems));
    }
    else {
      const newCartItems = cartItems.map((x) =>
      x._id === product._id ? { ...ProdExist, qty: ProdExist.qty - 1} : x);
      setCartItems(newCartItems);
      localStorage.setItem('cartItems' , JSON.stringify(newCartItems));
    }
  };

  
      
    
  useEffect(() => {
    setCartItems(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);
  },[]);


  
  
  return (
    
    <React.Fragment className='allApp' >
   
      
      <Navbar countCartItems={cartItems.length} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} ></Navbar>  
      
      <div className='contentApp'>

      <Routes >
          <Route path="/" element={<Homepage />} />
          <Route path="asic" element={<ASIC cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} products={products}/>} />
          <Route path="ant-miner" element={<ANTMINER cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} products={products} />} />
          <Route path="videocards" element={<Videocards cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} products={products} />} />
          <Route path="mining-farms" element={<MiningFarms cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} products={products} />} />
          <Route path="*" element={<NoPage />} />
          <Route path='product/:productId' element={<SingleProductPage  cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} products={products}  />} />
          <Route path='checkout' element={<Checkout countCartItems={cartItems.length} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}  />} />
      </Routes>
      
      </div>


      <Footer/>
     
    </React.Fragment>
  );
}

export default App;


//<Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>

// Старый вариант вывода продуктов
//const [cartItems, setCartItems] = useState([]);
//  const {products}=data;
//  const onAdd = (product) => {
//    const ProdExist = cartItems.find((x) => x._id === product._id);
//    if(ProdExist){
//      const newCartItems = cartItems.map((x) =>
//      x._id === product._id ? { ...ProdExist, qty: ProdExist.qty + 1} : x);
//      setCartItems(newCartItems);
//      localStorage.setItem('cartItems' , JSON.stringify(newCartItems));
//    }
//    else {
//      const newCartItems = [...cartItems, {...product, qty: 1}];
//      setCartItems(newCartItems);
//      localStorage.setItem('cartItems' , JSON.stringify(newCartItems));
//    }
//  };
//  const onRemove = (product) => {
//    const ProdExist = cartItems.find((x) => x._id === product._id);
//    if (ProdExist.qty === 1){
//      const newCartItems = cartItems.filter((x) => x._id !== product._id);
//      setCartItems(newCartItems);
//      localStorage.setItem('cartItems' , JSON.stringify(newCartItems));
//    }
//    else {
//      const newCartItems = cartItems.map((x) =>
//      x._id === product._id ? { ...ProdExist, qty: ProdExist.qty - 1} : x);
//      setCartItems(newCartItems);
//      localStorage.setItem('cartItems' , JSON.stringify(newCartItems));
//    }
//  };
//  
//
//  useEffect(() => {
//    setCartItems(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);
//  },[]);