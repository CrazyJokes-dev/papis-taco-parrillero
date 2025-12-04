import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import '../styles/LocationHours.css';

function LocationHoursPage() {
  const hours = [
    ['Sunday', '1:00 PM – 5:00 PM'],
    ['Monday', 'Closed'],
    ['Tuesday', '4:00 PM – 8:30 PM'],
    ['Wednesday', '4:00 PM – 8:30 PM'],
    ['Thursday', '4:00 PM – 8:30 PM'],
    ['Friday', '4:00 PM – 8:30 PM'],
    ['Saturday', '12:00 PM – 8:00 PM'],
  ];

  return (
    <div className="location-page">
      <Container>
        <Row className="mb-4 align-items-center">
          <Col md={6}>
            <h2 className="page-title">Find Us & Hours</h2>
            <p className="lead">On Grand River Ave. Near Walgreens and Auto Zone in Howell</p>

            <Card className="location-card mb-3">
              <Card.Body>
                <Card.Title>Papi's Taco Parrillero</Card.Title>
                <Card.Text className="mb-2">
                  <strong>Address:</strong> 2429 East Grand River Avenue, Howell, MI 48843
                </Card.Text>
                <Card.Text className="mb-2">
                  <strong>Phone:</strong> <a href="tel:+12487986784">(248) 798-6784</a>
                </Card.Text>

                <div className="d-flex gap-2">
                  <a href="https://www.google.com/maps/dir/?api=1&destination=+2429+E+Grand+River+Ave,+Howell,+MI+48843" target="_blank" rel="noreferrer">
                    <Button variant="warning">Get Directions</Button>
                  </a>
                  <a href="tel:+12487986784">
                    <Button variant="outline-light">Call</Button>
                  </a>
                </div>
              </Card.Body>
            </Card>

            <h4 className="mb-2">Hours</h4>
            <Table striped bordered hover size="sm" className="hours-table">
              <tbody>
                {hours.map((row) => (
                  <tr key={row[0]}>
                    <td className="day">{row[0]}</td>
                    <td className="time">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <p className="small muted">Hours subject to change — call or follow our socials for updates.</p>
          </Col>

          <Col md={6}>
            <div className="map-wrapper">
              <iframe
                title="Papi's Tacos location"
                src="https://www.google.com/maps?q=Mary's+Fabulous+Chicken+%26+Fish&output=embed"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LocationHoursPage;