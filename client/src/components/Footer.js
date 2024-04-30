import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Header.css';

function Footer() {
	return (
		<div style={{ backgroundColor: 'rgba(255, 165, 0, 0.2', paddingTop: '25px'}}>
			<h2 style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Contact Us</h2>
			<Container style={{ 
				backgroundColor: 'rgba(0, 0, 0, 0.2)'
				}}>
				<Row>
					<Col sm={4}><strong>Email:</strong></Col>
					<Col sm={6}>papistacosparrillero@gmail.com</Col>
				</Row>
				<Row>
					<Col sm={4}><strong>Phone Number:</strong></Col>
					<Col sm={6}>248-798-6784</Col>
				</Row>
			</Container>  
		</div>
	)
}

export default Footer