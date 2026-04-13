import React, { useState, useRef } from 'react'
import { Form, Button, Row, Col, Alert, Spinner } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'

export default function Contact() {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState({ type: '', msg: '' })
  const [loading, setLoading] = useState(false)

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', msg: '' })

    // REPLACE these with your actual EmailJS credentials
    const SERVICE_ID = 'service_np62b5e'
    const TEMPLATE_ID = 'template_ekky9bt'
    const PUBLIC_KEY = 'q0hh6gFQgCw53C3Ay'

    if (SERVICE_ID === 'YOUR_SERVICE_ID' || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      setLoading(false)
      setStatus({ 
        type: 'warning', 
        msg: 'Please set up your EmailJS IDs in Contact.jsx to send messages.' 
      })
      return
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        setLoading(false)
        setStatus({ type: 'success', msg: 'Message sent successfully! I will get back to you soon.' })
        setForm({ name: '', email: '', phone: '', message: '' }) // Clear form
      }, (error) => {
        setLoading(false)
        setStatus({ type: 'danger', msg: 'Failed to send message. Please try again later.' })
        console.error('EmailJS Error:', error.text)
      })
  }

  return (
    <div className="section" id="contact">
      <div className="container-narrow">
        <h2 className="section-title gradient-text text-center">Contact Me</h2>
        <p className="section-subtitle">Send a message. I’ll get back to you soon.</p>
        
        <div className="glass glow card-neo p-4">
          {status.msg && (
            <Alert variant={status.type} dismissible onClose={() => setStatus({ type: '', msg: '' })}>
              {status.msg}
            </Alert>
          )}

          <Form ref={formRef} onSubmit={onSubmit} className="contact-form">
            <Row className="g-3">
              <Col xs={12} md={4}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Your name" 
                    name="name" 
                    value={form.name} 
                    onChange={onChange} 
                    required 
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={4}>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="you@example.com" 
                    name="email" 
                    value={form.email} 
                    onChange={onChange} 
                    required 
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={4}>
                <Form.Group controlId="phone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    name="phone" 
                    value={form.phone} 
                    onChange={onChange} 
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    placeholder="Write your message" 
                    name="message" 
                    value={form.message} 
                    onChange={onChange} 
                    required 
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Button 
                  type="submit" 
                  className="btn-primary-neo d-flex align-items-center gap-2" 
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Spinner animation="border" size="sm" /> Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </Col>
            </Row>
          </Form>

          <hr className="my-4" />
          <div className="d-flex flex-column gap-4 contact-details">
            <div className="d-flex align-items-start gap-3">
              <div className="icon-wrap">
                <MdEmail className="fs-3 text-secondary" />
              </div>
              <div>
                <div className="fw-semibold text-secondary">Email</div>
                <a href="mailto:patelpinshu4246@gmail.com" className="text-white text-decoration-none">patelpinshu4246@gmail.com</a>
              </div>
            </div>
            
            <div className="d-flex align-items-start gap-3">
              <div className="icon-wrap">
                <MdLocationOn className="fs-3 text-secondary" />
              </div>
              <div>
                <div className="fw-semibold text-secondary">Location</div>
                <div className="text-white">Kadi, Mehsana, Gujarat</div>
              </div>
            </div>
            
            <div className="d-flex align-items-start gap-3">
              <div className="icon-wrap">
                <MdPhone className="fs-3 text-secondary" />
              </div>
              <div>
                <div className="fw-semibold text-secondary">Phone</div>
                <a href="tel:+918780165043" className="text-white text-decoration-none">+91 8780165043</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
