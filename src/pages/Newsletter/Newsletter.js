import { Col, Row } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import './Newsletter.css'

export const Newsletter = () => {
  return (
    <>
      <div class="container">
        <section className="new-email-bx">
          <Col lg={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                  <div className="newsletter-bx wow slideInUp">
                    <Row className="align-items-center">
                      <Col lg={12} md={6} xl={5}>
                        <img src="https://res.cloudinary.com/robles-identity/image/upload/v1686434827/56323078-08D4-4EF9-B138-1F135291A4FA_o6lqo0.png" />
                        <h3>Assine a nossa newsletter<br></br> e não perca as atualizações mais recentes</h3>
                      </Col>
                      <Col md={6} xl={7}>
                        <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
                        <form
                          action="https://app.convertkit.com/forms/5250538/subscriptions"
                          className="seva-form formkit-form"
                          method="post"
                          data-sv-form={5250538}
                          data-uid="a3647326f1"
                          data-format="inline"
                          data-version={5}
                          data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Sucesso! Agora fique sempre de olho em sua caixa de entrada para não perder novidades e promoções que disponibilizaremos para você.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
                          min-width="400 500 600 700 800"
                        >
                          <Row>
                            <Col size={12} sm={6} className="px-1">
                              <input type="text" placeholder="Primeiro nome" name="fields[first_name]" required />
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                              <input type="text" placeholder="Segundo nome" name="fields[last_name]" required />
                            </Col>
                            <Col size={12} className="px-1">
                              <input type="email" placeholder="Seu melhor E-mail" name="email_address" required />
                            </Col>
                          </Row>
                          <div className="d-flex justify-content-center">
                            <button data-element="submit" className="BtnAnimationConnect">
                              <div class="formkit-spinner">
                                <div></div>
                                <div></div>
                                <div></div>
                              </div>
                              <span className="TxtAnimationConnect">Me inscrever</span>
                            </button>
                          </div>
                        </form>
                      </Col>
                    </Row>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </section>
      </div>
    </>
  )
}
