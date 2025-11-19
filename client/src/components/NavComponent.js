import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Header.css'

function NavComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
          <Nav className="justify-content-between">
            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
            <Nav.Link href="/location-and-hours">Location and Hours</Nav.Link>
            <Nav.Link href="#home">Menu</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavComponent