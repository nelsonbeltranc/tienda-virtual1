import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

function Acerca() {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-5">Acerca de Nuestra Tienda</h1>
      
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Nuestra Historia</Card.Title>
              <Card.Text>
                Fundada en 2024, nuestra tienda virtual nació con la visión de ofrecer productos de alta calidad a precios accesibles. Desde entonces, hemos crecido para convertirnos en un destino de confianza para compradores en línea de todo el país.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Nuestra Misión</Card.Title>
              <Card.Text>
                Nos dedicamos a proporcionar una experiencia de compra excepcional, ofreciendo una cuidadosa selección de productos y un servicio al cliente de primera clase. Nuestro objetivo es superar las expectativas de nuestros clientes en cada interacción.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Nuestros Valores</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Calidad:</strong> Nos comprometemos a ofrecer solo productos de la más alta calidad.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Integridad:</strong> Actuamos con honestidad y transparencia en todas nuestras operaciones.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Innovación:</strong> Buscamos constantemente nuevas formas de mejorar y evolucionar.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Satisfacción del cliente:</strong> Tu felicidad es nuestra prioridad número uno.
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Nuestro Equipo</Card.Title>
              <Card.Text>
                Detrás de nuestra tienda hay un equipo dedicado de profesionales apasionados por brindar la mejor experiencia de compra en línea. Desde nuestros expertos en selección de productos hasta nuestro equipo de atención al cliente, todos trabajamos juntos para hacer de tu experiencia de compra algo excepcional.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Contacto</Card.Title>
              <Card.Text>
                ¿Tienes preguntas o comentarios? Nos encantaría escucharte. Contáctanos en <Card.Link href="mailto:info@nuestratienda.com">info@nuestratienda.com</Card.Link> o llámanos al 123-456-7890.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Acerca;