import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Typewriter from '../../components/Typewriter';
import "./Banner.css";

export const Banner = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Somos a ID SYSTEMS</span>
                  <h1>{`Oferecemos: `}
                    <span className="wrap">
                      <Typewriter
                      responsive={responsive}
                        strings={[
                          'Desenvolvimento WEB',
                          'Consultoria de Marketing',
                          'Social Media', 'WEB Design',
                          'UI/UX Designer'
                        ]}
                      wrapperClassName="typewriterWrapper"
                      cursorClassName="typewriterCursor"
                      />
                    </span>
                  </h1>
                  <p><em>
                    Trabalhamos para que o seu negócio saia do teórico e seja praticado de forma que agregue valor a marca.
                    Dessa forma, oferecemos serviços que em conjunto geram uma <strong>IDENTIDADE</strong> forte e marcante capaz de alavancar seus objetivos e fazer com que seu negócio seja visto como algo realmente profissional e completo.
                  </em></p>

                  <button onClick={() => console.log('connect')}>
                    <a href="#connect" style={{ textDecoration: 'none', color: '#fff' }}>
                      Vamos nos conectar <ArrowRightCircle size={25} />
                    </a>
                  </button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
