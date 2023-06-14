import { Container, Row, Col } from "react-bootstrap";
import { Newsletter } from "../../pages/Newsletter/Newsletter";
import logo from "../../assets/img/logo.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import { FaReact } from 'react-icons/fa';
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Newsletter />
          <Col size={12} sm={6}>
            <img className="logo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.instagram.com/systemsid_/"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Este site foi feito com <FaReact size={25} /> e muito❤️<br />Copyright 2023. Todos os direitos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
