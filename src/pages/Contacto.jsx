import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';

function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí irá la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    setFormStatus('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Contáctanos</h1>
      
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <h2>Información de Contacto</h2>
              <p>Estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros.</p>
              <ul className="list-unstyled">
                <li>Email: info@tuvirtual.com</li>
                <li>Teléfono: (123) 456-7890</li>
                <li>Dirección: 123 Calle Principal, Ciudad, País</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6}>
          <Card>
            <Card.Body>
              <h2 className="mb-4">Envíanos un Mensaje</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Nombre:</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Mensaje:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Enviar Mensaje
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {formStatus && (
        <Alert variant="success" className="mt-4">
          {formStatus}
        </Alert>
      )}
    </Container>
  );
}

export default Contacto;