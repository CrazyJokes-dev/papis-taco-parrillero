import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Header.css';
import '../Footer.css';

function Footer() {
	return (
		<footer className="site-footer">
			<Container>
				<Row className="footer-top">
					<Col md={4} className="footer-brand">
						<h3>Papi's Taco Parrillero</h3>
						<p className="muted">Authentic flavors from our truck to your plate.</p>
					</Col>
					<Col md={4} className="footer-contact">
						<h4>Contact</h4>
						<p><strong>Email:</strong> <a href="mailto:papistacosparrillero@gmail.com">papistacosparrillero@gmail.com</a></p>
						<p><strong>Phone:</strong> <a href="tel:+12487986784">(248) 798-6784</a></p>
					</Col>
					<Col md={4} className="footer-social">
						<h4>Follow Us</h4>
						<div className="social-links">
							{/* <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="social">Instagram</a> */}
							<a href="https://www.facebook.com/p/Papis-Taco-Parrillero-100092604847004/" target="_blank" rel="noreferrer" aria-label="Facebook" className="social">Facebook</a>
							{/* <a href="https://wa.me/12487986784" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="social">WhatsApp</a> */}
						</div>
					</Col>
				</Row>
				<Row className="footer-bottom">
					<Col className="copyright">© {new Date().getFullYear()} Papi's Tacos Parrillero — All rights reserved.</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer