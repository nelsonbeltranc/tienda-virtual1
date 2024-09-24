/*
import ProductList from '../components/ProductList'
import { products } from '../data/products'

function Tienda() {
  return (
    <div>
      <h1>Nuestra Tienda</h1>
      <ProductList products={products} />
    </div>
  )
}

export default Tienda*/

import React from 'react';
import ProductList from '../components/ProductList';
import { products } from '../data/products';

function Tienda() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Nuestra Tienda</h1>
      <div className="row">
        <div className="col-md-3">
          {/* Aquí podrías añadir filtros o categorías */}
          <h3>Categorías</h3>
          <ul className="list-group">
            <li className="list-group-item">Categoría 1</li>
            <li className="list-group-item">Categoría 2</li>
            <li className="list-group-item">Categoría 3</li>
          </ul>
        </div>
        <div className="col-md-9">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}

export default Tienda;