import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function Producto() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  // Encuentra el producto basado en el ID
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">Producto no encontrado</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={product.image} alt={product.name} />
          </Card>
        </Col>
        <Col md={6}>
          <h1>{product.name}</h1>
          <Card className="mb-3">
            <Card.Body>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
          </Card>
          <p className="h3 mb-3">Precio: ${product.price}</p>
          <Button 
            variant="primary" 
            size="lg" 
            onClick={() => addToCart(product)}
          >
            Añadir al carrito
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Producto;