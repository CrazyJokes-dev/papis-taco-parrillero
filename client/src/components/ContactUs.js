import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import '../styles/ContactUs.css';

function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: 'danger', message: 'Please fill in all fields.' });
      return;
    }

    // Try to POST to backend API; fall back to mailto if network fails.
    const payload = { name, email, message };
    fetch('https://api.papistacoparrillero.com/api/contact/addContact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        if (!res.ok) {
          const txt = await res.text();
          throw new Error(txt || 'Server error');
        }
        return res.json();
      })
      .then((json) => {
        setStatus({ type: 'success', message: json.msg || 'Message sent. Thank you!' });
        setForm({ name: '', email: '', message: '' });
        console.log('data -- ', json);
      })
      .catch((err) => {
        console.error('Contact submit failed:', err);
        // fallback to mailto
        const subject = encodeURIComponent(`Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
        const mailto = `mailto:papistacosparrillero@gmail.com?subject=${subject}&body=${body}`;

        window.location.href = mailto;
        setStatus({ type: 'warning', message: 'Could not reach server — opening your email client as fallback.' });
      });
  }

  return (
    <div className="contact-page">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <Card className="contact-card">
              <Card.Body>
                <h2 className="mb-3">Contact Us</h2>
                <p className="lead">Have a question or want to book our truck? Send us a message.</p>

                {status && (
                  <Alert variant={status.type} onClose={() => setStatus(null)} dismissible>
                    {status.message}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit} className="contact-form">
                  <Form.Group className="mb-3" controlId="contactName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="contactEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="contactMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      placeholder="Tell us how we can help..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <div className="d-flex gap-2 align-items-center">
                    <Button type="submit" variant="warning">Send Message</Button>
                    <small className="text-muted"> or email us at <a href="mailto:papistacosparrillero@gmail.com">papistacosparrillero@gmail.com</a></small>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs;
