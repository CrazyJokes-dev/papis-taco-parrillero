import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../AboutUs.css';

function AboutUs() {
  return (
    <div className="about-page">
      <Container>
        <Row className="justify-content-md-center about-top">
          <Col md={10} className="about-hero">
            <h1>Papi's Tacos Parrillero</h1>
            <p className="tagline">Traditional Mexican flavors crafted on the grill — tacos, salsas, and good vibes.</p>
            <p className="lead">We are a family-run taco truck bringing authentic tacos to the neighborhood. Every dish is made with care using recipes passed down through generations and fresh, locally-sourced ingredients.</p>
            <div className="mt-3">
              <a href="/location-and-hours"><Button variant="warning" className="me-2">Find Our Location</Button></a>
              <a href="/contact-us"><Button variant="outline-dark">Contact Us</Button></a>
            </div>
          </Col>

          <Col md={10} className="about-photo">
            <Card className="photo-card">
              <img src="/ClearTacoLogo.jpg" alt="Papi's Tacos truck" className="photo" />
            </Card>
          </Col>
        </Row>

        <Row className="mt-5 story-row">
          <Col md={4} className="story">
            <h3>Our Story</h3>
            <p>Started at local events and markets, Papi's Tacos grew from a passion for parrillero grilling. We blend traditional techniques and a friendly neighborhood welcome.</p>
          </Col>
          <Col md={4} className="story">
            <h3>Our Food</h3>
            <p>We focus on grilled meats, handmade tortillas, and bold salsas. Try our signature al pastor and carne asada tacos—simple, smoky, and full of flavor.</p>
          </Col>
          <Col md={4} className="story">
            <h3>Community</h3>
            <p>We love serving our neighbors. Follow us for pop-up locations, catering options, and weekly specials.</p>
          </Col>
        </Row>

        <Row className="mt-4 values-row">
          <Col>
            <h4>Values</h4>
            <ul className="values">
              <li><strong>Quality:</strong> Fresh ingredients, cooked to order.</li>
              <li><strong>Authenticity:</strong> Recipes and techniques rooted in tradition.</li>
              <li><strong>Hospitality:</strong> Fast, friendly service with a smile.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
