import React, { useEffect } from 'react';
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
import data from './data/Products';
import { useState } from 'react';





function App() {
  const [cartItems, setCartItems] = useState([]);
  const {products}=data;
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
    
    <React.Fragment>
    
      
      <Navbar countCartItems={cartItems.length} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
      
    
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="asic" element={<ASIC />} />
          <Route path="ant-miner" element={<ANTMINER />} />
          <Route path="videocards" element={<Videocards cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} products={products}/>} />
          <Route path="mining-farms" element={<MiningFarms />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
      
      <Footer/>

    </React.Fragment>
  );
}

export default App;


//<Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>