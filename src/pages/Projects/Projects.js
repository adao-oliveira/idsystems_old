import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productDataDesenv, responsiveDesenv } from "./Desenv/data";
import ProjectDesenv from "./Desenv/ProjectDesenv";
import { productDataSocialMedia, responsiveSocialMedia } from "./SocialMedia/data";
import ProjectSocialMedia from "./SocialMedia/ProjectSocialMedia";
import { productDataMarketing, responsiveMarketing } from "./Marketing/data";
import ProjectMarketing from "./Marketing/ProjectMarketing";
import 'animate.css';
import "./Projects.css";

export const Projects = () => {
  const projectDesenv = productDataDesenv.map((item) => (
    <ProjectDesenv
      name={item.name}
      url={item.imageurl}
    />
  ));

  const projectSocialMedia = productDataSocialMedia.map((item) => (
    <ProjectSocialMedia
      name={item.name}
      url={item.imageurl}
    />
  ));

  const projectMarketing = productDataMarketing.map((item) => (
    <ProjectMarketing
      name={item.name}
      url={item.imageurl}
    />
  ));

  return (
    <section className="project" id="project">
      {({ isVisible }) =>
        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
          <Container>
            <h2>Projetos</h2>
            <p>Veja alguns dos nossos projetos já entregues 👇</p>
            {/* <Row>
          <Col size={12}>
            <TrackVisibility>
              
                  
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Desenv. WEB</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Social Media</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Marketing</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row> */}
            <h1>Desenvolvimento WEB</h1>
            <Carousel showDots={true} responsive={responsiveDesenv}>
              {projectDesenv}
            </Carousel>
            {/* </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row> */}
            <h1>Social Media</h1>
            <Carousel showDots={true} responsive={responsiveSocialMedia}>
              {projectSocialMedia}
            </Carousel>
            {/* </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row> */}
            <h1>Marketing</h1>
            <Carousel showDots={true} responsive={responsiveMarketing}>
              {projectMarketing}
            </Carousel>
            {/* </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container> */}
            {/* </div>} */}
            {/* </TrackVisibility>
          </Col>
        </Row> */}
          </Container>
        </div>}
      <img className='background-image-right' src={colorSharp2}></img>
    </section>
  )
}
