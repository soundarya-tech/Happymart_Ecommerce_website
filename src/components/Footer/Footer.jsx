import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className='box'>
            <div className="logo">
              <ion-icon name="bag"></ion-icon>
              <h1>Happymart</h1>
            </div>
            <p>Every purchase made with pleasure.We worked with global brands and have created an application for you to do our shopping.</p>
          </Col>
          <Col md={3} sm={5} className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </Col>
          <Col md={3} sm={5} className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>No: 70 Grand Square street, Velacherry, Chennai, Tamil Nadu </li>
              <li>Email: happymart@gmail.com</li>
              <li>Phone: +91 8123456789</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
