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
      <Container>
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h2>Projetos</h2>
              <p>Veja alguns dos nossos projetos já entregues 👇</p>
              <h1>Desenvolvimento WEB</h1>
              <Carousel showDots={true} responsive={responsiveDesenv}>
                {projectDesenv}
              </Carousel>
              <h1>Social Media</h1>
              <Carousel showDots={true} responsive={responsiveSocialMedia}>
                {projectSocialMedia}
              </Carousel>
              <h1>Marketing</h1>
              <Carousel showDots={true} responsive={responsiveMarketing}>
                {projectMarketing}
              </Carousel>
            </div>}
        </TrackVisibility>
      </Container>
      <img className='background-image-right' src={colorSharp2}></img>
    </section>
  )
}
