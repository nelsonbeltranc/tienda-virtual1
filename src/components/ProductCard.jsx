import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="card h-100">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
        <Link to={`/producto/${product.id}`} className="btn btn-primary">
          Ver Detalles
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;