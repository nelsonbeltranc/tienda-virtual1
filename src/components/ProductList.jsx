import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products'; // Asegúrate de que esta ruta sea correcta

function ProductList() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Nuestros Productos</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Precio: ${product.price}</p>
                <Link to={`/producto/${product.id}`} className="btn btn-primary mt-auto">
                  Ver Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;