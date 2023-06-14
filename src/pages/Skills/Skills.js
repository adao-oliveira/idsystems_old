import img1 from "../../assets/img/one.png";
import img2 from "../../assets/img/two.png";
import img3 from "../../assets/img/three.png";
import img4 from "../../assets/img/four.png";
import colorSharp from "../../assets/img/color-sharp.png"
import Marquee from 'react-fast-marquee';
import 'react-multi-carousel/lib/styles.css';
import './Skills.css'

export const Skills = () => {
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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                          <p>
                            Veja abaixo nossos níveis de habilidades e bagagens em relação as experiências 
                            <br />com cada um dos serviços que prestamos 👇
                          </p>
                        <Marquee responsive={responsive} direction="right" speed={100} delay={5} className="skill-slider">
                            <div className="item">
                                <img src={img1} alt="Image" />
                                <h5>Desenvolvimento WEB</h5>
                            </div>
                            <div className="item">
                                <img src={img2} alt="Image" />
                                <h5>Consultoria de Marketing</h5>
                            </div>
                            <div className="item">
                                <img src={img3} alt="Image" />
                                <h5>Social Media</h5>
                            </div>
                            <div className="item">
                                <img src={img4} alt="Image" />
                                <h5>WEB Design</h5>
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
