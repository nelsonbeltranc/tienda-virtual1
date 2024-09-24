import React from 'react';
import Head from 'next/head';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Mi Tienda Virtual de Cervezas</title>
        <meta name="description" content="Bienvenido a nuestra tienda virtual de cervezas artesanales" />
      </Head>

      <Container>
        <Jumbotron className="my-4 text-center">
          <h1 className="display-4">Bienvenido a La Cervecería Virtual</h1>
          <p className="lead">Descubre nuestra selección de cervezas artesanales de todo el mundo</p>
          <Button variant="primary" size="lg">Ver Catálogo</Button>
        </Jumbotron>

        <Row>
          <Col>
            <h2 className="text-center mb-4">Nuestras Cervezas Destacadas</h2>
            <ProductList />
          </Col>
        </Row>

        <Row className="my-4">
          <Col md={6}>
            <h3>Sobre Nosotros</h3>
            <p>Somos apasionados por las cervezas artesanales y queremos compartir esa pasión contigo. Nuestra tienda ofrece una cuidadosa selección de las mejores cervezas de pequeños productores.</p>
          </Col>
          <Col md={6}>
            <h3>Nuestro Compromiso</h3>
            <p>Nos comprometemos a ofrecerte la mejor experiencia de compra, con envíos rápidos y un servicio al cliente excepcional. ¡Tu satisfacción es nuestra prioridad!</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}