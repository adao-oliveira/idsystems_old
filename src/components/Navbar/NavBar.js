import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/img/logo.png';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import './Navbar.css'

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img className="logo" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Habilidades</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projetos</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.instagram.com/systemsid_/"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>
              {/* <HashLink to='#connect'>
                <button className="BtnAnimationConnect"><span className="TxtAnimationConnect">Vamos nos conectar</span></button>
              </HashLink> */}
            </span>
            <div className="text-center text-sm-end navbar-text">
              <HashLink to='#connect'>
                <button class="button-upload" routerLink="#">
                  <span class="TxtAnimationConnect button-upload__text">Vamos nos conectar
                    <svg xmlns="http://www.w3.org/2000/svg" width="36.089" height="34.388" class="button-upload__logo" viewBox="0 0 36.089 34.388">
                      <g transform="translate(22.577) rotate(49)" class="button-upload__logo--complete">
                        <g transform="translate(5.976 28.664)" class="button-upload__logo--trails">
                          <path d="M153.97,738.46l1.692.055v6.115l-1.692-1.147" transform="translate(-153.97 -738.46)" fill="#fff" />
                          <path d="M337.1,738.46l-1.692.055v6.115l1.692-1.147" transform="translate(-328.367 -738.46)" fill="#fff" />
                          <path d="M243.98,738.46h1.692V747l-.846.939-.846-.971" transform="translate(-240.486 -738.46)" fill="#fff" />
                        </g>
                        <g class="button-upload__logo--rocket">
                          <path d="M19.627,21.9l-2.95-2.95A28.11,28.11,0,0,0,10.3,0,28.1,28.1,0,0,0,3.923,18.952L.973,21.9s-1.454,4.092-.8,6.822l4.393-4.378q.074.358.155.721H5.7l.981.979h3.606l.017-.979.017.979h3.605l.979-.979h.979q.083-.363.155-.721l4.393,4.378C21.082,25.994,19.627,21.9,19.627,21.9Zm-9.3-2.65a2.7,2.7,0,1,1,2.7-2.7A2.7,2.7,0,0,1,10.323,19.252Z" transform="translate(-0.002 0)" fill="#fff" />
                        </g>
                      </g>
                    </svg>
                  </span>
                </button>
              </HashLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
