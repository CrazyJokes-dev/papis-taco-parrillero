import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LocationHoursPage() {
  return (
    <Container style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <Row>
        <Col sm={4}><strong>Location</strong></Col>
        <Col sm={6}>BP Gas Station by Salvation Army</Col>
      </Row>
      <Row>
        <Col sm={4}><strong>Phone Number</strong></Col>
        <Col sm={6}>248-798-6784</Col>
      </Row>
      <br></br>
      <Row>
        <Col><b><i>Hours</i></b></Col>
      </Row>
      <Row>
        <Col sm={2}>Sunday:</Col>
        <Col sm>1pm - 5pm</Col>
      </Row>
      <Row>
        <Col sm={2}>Monday:</Col>
        <Col sm>Closed</Col>
      </Row>
      <Row>
        <Col sm={2}>Tuesday:</Col>
        <Col sm>4pm - 8:30pm</Col>
      </Row>
      <Row>
        <Col sm={2}>Wednesday:</Col>
        <Col sm>4pm - 8:30pm</Col>
      </Row>
      <Row>
        <Col sm={2}>Thursday:</Col>
        <Col sm>4pm - 8:30pm</Col>
      </Row>
      <Row>
        <Col sm={2}>Friday:</Col>
        <Col sm>4pm - 8:30pm</Col>
      </Row>
      <Row>
        <Col sm={2}>Saturday:</Col>
        <Col sm>11:30am - 8pm</Col>
      </Row>
    </Container>
  );
}

export default LocationHoursPage;