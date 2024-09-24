import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Asegúrate de que la ruta sea correcta
import Home from './pages/HomePage';
import Tienda from './pages/TiendaPage';
import Acerca from './pages/Acerca';
import Contacto from './pages/Contacto';
import Carrito from './pages/Carrito';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </Layout>
  );
}

export default App;