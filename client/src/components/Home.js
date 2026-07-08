import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="hero-text">
              <h1>Welcome to Papi's Tacos Parrillero</h1>
              <p className="lead">Authentic Mexican tacos, grilled to perfection and served with a smile. Find us at our truck for fresh flavors and good vibes!</p>
              <div className="mt-3">
                <a href="/location-and-hours"><Button variant="warning" className="me-2">See Location & Hours</Button></a>
                <a href="/menu"><Button variant="outline-dark">View Menu</Button></a>
              </div>
            </Col>
            <Col md={6} className="hero-image">
              <img src="/ClearTacoLogo.jpg" alt="Papi's Tacos Truck" className="truck-img" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="featured-section">
        <Container>
          <h2 className="section-title">Featured Tacos</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="menu-card">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1613409385222-3d0decb6742a?q=80&w=1170&auto=format&fit=crop&w=400&q=80" alt="Al Pastor Taco" />
                <Card.Body>
                  <Card.Title>Al Pastor</Card.Title>
                  <Card.Text>Marinated pork, onion, cilantro, and salsa on a soft corn tortilla.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="menu-card">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1572284918354-8b5c764b1215?q=80&w=1170&auto=format&fit=crop&w=400&q=80" alt="Carne Asada Taco" />
                <Card.Body>
                  <Card.Title>Carne Asada</Card.Title>
                  <Card.Text>Grilled steak, fresh lime, onion, cilantro, and salsa verde on a warm tortilla.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="menu-card">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1719948515819-71265e1abb0d?q=80&w=1074&auto=format&fit=crop&w=400&q=80" alt="Veggie Taco" />
                <Card.Body>
                  <Card.Title>Chicken</Card.Title>
                  <Card.Text>Marinated Shredded Chicken, onion, cilantro, and house salsa on a corn tortilla.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta-section">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h3>Book Us For Your Next Event!</h3>
              <p>We cater parties, corporate events, and celebrations. Bring the taco truck experience to your guests.</p>
            </Col>
            <Col md={4} className="text-md-end">
              <a href="/contact-us"><Button variant="warning" size="lg">Contact Us</Button></a>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;