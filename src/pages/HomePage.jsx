/*import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';  // Asegúrate de que ProductCard esté en esta ubicación
import { products } from '../data/products';  // Verifica que exista este archivo
import styles from '../styles/Home.module.css';  // Asegúrate de que este archivo CSS exista

function Home() {
  // Seleccionar algunos productos destacados
  const featuredProducts = products.slice(0, 3);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Bienvenido a Nuestra Tienda Virtual</h1>
        <p>Descubre productos increíbles a precios fantásticos</p>
      </header>

      <section className={styles.featured}>
        <h2>Productos Destacados</h2>
        <div className={styles.productGrid}>
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Link to="/tienda" className={styles.viewAllButton}>Ver todos los productos</Link>
      </section>

      <section className={styles.about}>
        <h2>Sobre Nosotros</h2>
        <p>Somos una tienda comprometida con la calidad y la satisfacción del cliente. Ofrecemos una amplia gama de productos para satisfacer todas tus necesidades.</p>
        <Link to="/acerca" className={styles.learnMoreButton}>Conoce más</Link>
      </section>

      <section className={styles.contact}>
        <h2>Contáctanos</h2>
        <p>¿Tienes alguna pregunta? Estamos aquí para ayudarte.</p>
        <Link to="/contacto" className={styles.contactButton}>Ponte en contacto</Link>
      </section>
    </div>
  );
}

export default Home;*/

import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="container mt-4">
      <header className="text-center mb-5">
        <h1 className="display-4">Bienvenido a Nuestra Tienda Virtual</h1>
        <p className="lead">Descubre productos increíbles a precios fantásticos</p>
      </header>

      <section className="mb-5">
        <h2 className="text-center mb-4">Productos Destacados</h2>
        <div className="row">
          {featuredProducts.map(product => (
            <div key={product.id} className="col-md-4 mb-3">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="text-center mt-3">
          <Link to="/tienda" className="btn btn-primary">Ver todos los productos</Link>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="text-center mb-3">Sobre Nosotros</h2>
        <p className="text-center">Somos una tienda comprometida con la calidad y la satisfacción del cliente. Ofrecemos una amplia gama de productos para satisfacer todas tus necesidades.</p>
        <div className="text-center">
          <Link to="/acerca" className="btn btn-outline-secondary">Conoce más</Link>
        </div>
      </section>

      <section>
        <h2 className="text-center mb-3">Contáctanos</h2>
        <p className="text-center">¿Tienes alguna pregunta? Estamos aquí para ayudarte.</p>
        <div className="text-center">
          <Link to="/contacto" className="btn btn-success">Ponte en contacto</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;