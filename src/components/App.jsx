import React from "react";
//react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
//toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//componentes
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import Contacto from "./Contacto/Contacto";
import Footer from "./footer/footer";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
//fire base
//import { getProductos } from "../firebase/firebase";
//contexto carrito
import { CarritoProvider } from "../context/carritoContext";
import Asesorias from "./Asesorias/Asesorias";
function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <Navbar />
          <Routes>
            <Route path="/Asesorias" element={<Asesorias />}/>
            <Route path="/" element={<Hero />} />
            <Route path="/Carrito" element={<Cart />} />
            <Route path="/Productos" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:idCategoria" element={<ItemListContainer />}/>
            <Route path="/Checkout" element={<Checkout/>}/>
            <Route path="/Contacto" element={<Contacto />} />
          </Routes>
          <ToastContainer />
          <Footer />
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
