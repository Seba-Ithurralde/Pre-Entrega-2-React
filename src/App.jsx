import React from 'react';
import "./App.css";
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import Contactos from './pages/Contactos';


export default function App() {

  return (
    <>
       <BrowserRouter>
        <NavBar />
          <ItemListContainer greeting="Bienvenidos a mi e-commerce" />
        <Routes>
          <Route exact path='/'/>
          <Route exact path="/category/inicio" element={<Inicio />} />
          <Route exact path="/category/productos" element={<Productos />} />
          <Route exact path="/item/:prodId" element={<ItemDetailContainer />} />
          <Route exact path="/category/contactos" element={<Contactos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


