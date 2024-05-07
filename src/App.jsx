import { useState, useEffect } from 'react';
import "../scss/style.scss";
import "./App.css";
import imgBanner from "./assets/img-entrada.webp";
import iconInsta from "./assets/instagramLogo.svg";
import iconFacebook from "./assets/facebookLogo.svg";
import iconYoutube from "./assets/youtubeLogo.svg";
import blob1 from "./assets/blob-1.svg";
import blob2 from "./assets/blob-2.svg";
import blob3 from "./assets/blob-3.svg";
import linhas from "./assets/linhas.svg";
import pro1 from "./assets/pro-1.webp";
import pro2 from "./assets/pro-2.webp";
import pro3 from "./assets/pro-3.webp";
import pro4 from "./assets/pro-4.webp";
// import setaLeft from "./assets/seta-left.svg";
// import setaRight from "./assets/seta-right.svg";
import imgSobre from "./assets/img-sobre.webp";
import iconMenu from "./assets/icon-menu.svg";
import iconMenuClose from "./assets/x-lg.svg";
import iconCa1 from "./assets/icon-ca-1.webp";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  // const [slideIndex, setSlideIndex] = useState(0);

  const handleScroll = () => {
    const animaElements = document.querySelectorAll('[data-anima]')

    const DISTANCE_WINDOW_TOP = window.pageYOffset + window.innerHeight * 4 / 5;

    animaElements.forEach(element => {
        const DISTANCE_ELEMENT_TOP = element.getBoundingClientRect().top + window.pageYOffset;
        const delay = element.dataset.delay || 0;
        if (DISTANCE_WINDOW_TOP > DISTANCE_ELEMENT_TOP) {
            setTimeout(() => {
                element.classList.add('animated')
            }, delay);
        } else if (DISTANCE_WINDOW_TOP < DISTANCE_ELEMENT_TOP + element.offsetHeight) {
            element.classList.remove('animated')
        }
    })
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  handleScroll();

  return (
    <div className="container-geral">
      <header id="header">
        <button
          type="button"
          aria-label="abrir menu"
          className="header__btn-menu"
          onClick={isOpen ? handleCloseMenu : handleOpenMenu}
        >
          {!isOpen 
            ? <img src={iconMenu} alt="menu" className="header__btn-menu" />
            : <img src={iconMenuClose} alt="menu" className="header__btn-menu" />
          }
        </button>
        <nav className={`header__nav ${isOpen ? "ativo" : ""}`}>
          <ul>
            <li>
              <a onClick={handleCloseMenu} href="#">Inicio</a>
            </li>
            <li>
              <a onClick={handleCloseMenu} href="#">Consultas</a>
            </li>
            <li>
              <a onClick={handleCloseMenu} href="#">Exámenes</a>
            </li>
            <li>
              <a onClick={handleCloseMenu} href="#">Resultados</a>
            </li>
            <li>
              <a onClick={handleCloseMenu} href="#">Agendar cita</a>
            </li>
            <li>
              <a onClick={handleCloseMenu} href="#">Sobre nosotros</a>
            </li>
            <li>
              <a onClick={handleCloseMenu} href="#">Contactos</a>
            </li>
          </ul>
        </nav>

        <address className="header__redes-sociais">
          <a href="#">
            <img src={iconInsta} alt="Instagram" />
          </a>
          <a href="#">
            <img src={iconFacebook} alt="Facebook" />
          </a>
          <a href="#">
            <img src={iconYoutube} alt="Youtube" />
          </a>
        </address>
      </header>
      <main>
        <section aria-label="entrada" id="entrada">
          <div className="entrada__container">
            <span className="titulo">Nombre de la Veterinaria/Clínica</span>
            <div className="entrada__textos">
              <h1 className="titulo">
                El mejor soporte
                <br />
                de atención para <span>tu mejor</span> <br />
                amigo.
              </h1>
              <p className="entrada__paragrafo">
                Aquí encontrarás respuesta a todas tus dudas, desde elegir la mejor comida
                <br />
                hasta consejos imprescindibles para garantizar el bienestar de
                <br />
                tu peludo compañero.
              </p>
              <div className="entrada__btns">
                <a href="#" className="btns btn-border">
                  <div className="bg-hover"></div>
                  <p>Consulta</p>
                </a>
                <a href="#" className="btns btn-fill">
                  <div className="bg-hover"></div>
                  <p>Especialidades</p>
                </a>
              </div>
            </div>
            <div className="entrada__img">
              <img src={imgBanner} alt="gato amarelo listrado" />
            </div>
            <address aria-label="endereço" className="entrada__endereco">
              <span>Dirección</span>
              <span>Calle - Número</span>
            </address>
            <div
              aria-label="horario de funcionamento"
              className="entrada__funcionamento"
              data-anima="left"
              data-delay="800"
            >
              <p className="entrada__aberto-fechado"></p>
              <div>
                <p data-open="aberto">Lunes a Viernes</p>
                <p>
                  <time dateTime="08:00">8h:00</time> a <time dateTime="21:00">21h:00</time>
                </p>
              </div>
              <div>
                <p>
                  Sábado y Domingo
                </p>
                <p>
                  Cerrado.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section aria-label="valores" id="valores">
          <div className="container">
            <ul className="valores__lista">
              <li>
                <img src={iconCa1} alt="" />
                Capacitación
              </li>
              <li>
                <img src={iconCa1} alt="" />
                Alimentación
              </li>
              <li>
                <img src={iconCa1} alt="" />
                Adopción
              </li>
              <li>
                <img src={iconCa1} alt="" />
                Salud
              </li>
            </ul>
          </div>
        </section>
        <section
          aria-label="especialidades médicas"
          id="especialidades"
          className="padding-section"
        >
          <div className="container">
            <header className="especialidades__header" data-anima="left">
              <h2 className="titulo especialidades__titulo">
                Especialidades
              </h2>
              <p className="padding-txt">
                Nos dedicamos al cuidado de tu
                <br />
                mascota en las siguientes áreas.
              </p>
              <a href="#" className="btns btn-fill">
                <div className="bg-hover"></div>
                <p>Agendar una visita</p>
              </a>
            </header>
            <ul className="especialidades__lista">
              <li>
                <a href="#">Clínica General</a>
              </li>
              <li>
                <a href="#">Nefrología</a>
              </li>
              <li>
                <a href="#">Nutrición</a>
              </li>
              <li>
                <a href="#">Endocrinología</a>
              </li>
              <li>
                <a href="#">Dermatología</a>
              </li>
              <li>
                <a href="#">Oncología</a>
              </li>
              <li>
                <a href="#">Cardiología</a>
              </li>
              <li>
                <a href="#">Neurología</a>
              </li>
              <li>
                <a href="#">Acupuntura</a>
              </li>
              <li>
                <a href="#">Fisioterapia</a>
              </li>
              <li>
                <a href="#">Odontología</a>
              </li>
            </ul>
          </div>
          <div className="especialidades__bg-blob" data-anima="translate-right">
            <img src={blob2} alt="" />
          </div>
        </section>
        <section
          aria-label="exames disponiveis"
          id="exames"
          className="padding-section"
        >
          <div className="container">
            <header className="exames__header" data-anima="right">
              <h2 className="titulo">
                Exámenes
              </h2>
              <p className="padding-txt">
                Tenemos una amplia gama de
                <br />
                exámenes disponibles para tu mascota.
              </p>
              <a href="#" className="btns btn-border">
                <div className="bg-hover"></div>
                <p>Reserva tu examen</p>
              </a>
            </header>
            <ul className="exames__lista">
              <li>
                <a href="#">Examen de sangre</a>
              </li>
              <li>
                <a href="#">Análisis de orina</a>
              </li>
              <li>
                <a href="#">Ecocardiograma</a>
              </li>
              <li>
                <a href="#">Ultrasonido</a>
              </li>
              <li>
                <a href="#">Radiografía</a>
              </li>
              <li>
                <a href="#">Presión arterial</a>
              </li>
            </ul>
          </div>
          <div className="exames__enfeite" data-anima="left">
            <img src={linhas} alt="" />
          </div>
        </section>
        <section
          aria-label="nossos profissionais"
          id="profissionais"
          className="padding-section"
        >
          <div className="container">
            <header data-anima="translate-up">
              <h2 className="titulo">Conoce a nuestros profesionales</h2>
            </header>
            <div className="profissionais__container-lista">
              {/* <div className="profissionais__btns-lista">
                <button
                  type="button"
                  className="btn-ant disabled"
                  aria-label="mover slide para esquerda"
                >
                  <img src={setaLeft} alt="" />
                </button>
                <button
                  type="button"
                  aria-label="mover slide para direita"
                  className="btn-prox"
                >
                  <img src={setaRight} alt="" />
                </button>
              </div> */}
              <div className="profissionais__container-slide-lista">
                <ul className="profissionais__lista">
                  <li>
                    <a href="#">
                      <div className="profissionais__item-bg">Saber más</div>
                      <div className="profissionais__img">
                        <img src={pro1} alt="Thaís" />
                      </div>
                      <div className="profissionais__infos">
                        <p className="profissionais__nome">Nombre</p>
                        <p>Profesión/Función</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="profissionais__item-bg">Saber más</div>
                      <div className="profissionais__img">
                        <img src={pro2} alt="Victor" />
                      </div>
                      <div className="profissionais__infos">
                        <p className="profissionais__nome">Nombre</p>
                        <p>Profesión/Función</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="profissionais__item-bg">Saber más</div>
                      <div className="profissionais__img">
                        <img src={pro3} alt="Bianca" />
                      </div>
                      <div className="profissionais__infos">
                        <p className="profissionais__nome">Nombre</p>
                        <p>Profesión/Función</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="profissionais__item-bg">Saber más</div>
                      <div className="profissionais__img">
                        <img src={pro4} alt="Amanda" />
                      </div>
                      <div className="profissionais__infos">
                        <p className="profissionais__nome">Nombre</p>
                        <p>Profesión/Función</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="profissionais__bg-blob" data-anima="translate-left">
            <img src={blob1} alt="" />
          </div>
          <div
            className="profissionais__bg-linhas"
            data-anima="translate-bottom"
          >
            <img src={linhas} alt="" />
          </div>
        </section>
        <section aria-label="sobre o Vet" id="sobre">
          <div className="container">
            <div className="sobre__txts padding-section" data-anima="left">
              <h2 className="titulo">Acerca de</h2>
              <p>
                Somos una clínica veterinaria que se preocupa por la salud y el bienestar de tu mascota.
                Nuestro equipo está formado por profesionales capacitados y apasionados por los animales.
                Ven a conocernos y descubre todo lo que podemos hacer por tu mejor amigo.
              </p>
            </div>
            <div className="sobre__img" data-anima="translate-up">
              <img
                src={imgSobre}
                alt="gato branco e preto bocejando"
              />
            </div>
          </div>
        </section>
        <section
          aria-label="tire sua duvida"
          id="duvidas"
          className="padding-section"
        >
          <div className="container">
            <header data-anima="translate-up">
              <h2 className="titulo">¿Tiene usted alguna pregunta?</h2>
              <p className="padding-txt">¡Contáctenos!</p>
            </header>
            <div className="duvidas__container">
              <form action="#" className="duvidas__form">
                <div className="duvidas__campo-form">
                  <label htmlFor="nome" className="duvidas__label">
                    Nombre
                  </label>
                  <input type="text" name="nome" id="nome" placeholder="Ana" />
                </div>
                <div className="duvidas__campo-form">
                  <label htmlFor="email" className="duvidas__label">
                    Correo
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="ana@email.com"
                  />
                </div>
                <div className="duvidas__campo-form">
                  <label htmlFor="assunto" className="duvidas__label">
                    Asunto
                  </label>
                  <input
                    type="text"
                    name="assunto"
                    id="assunto"
                    placeholder="Consulta, cita, etc."
                  />
                </div>
                <div className="duvidas__campo-form">
                  <label htmlFor="mensagem" className="duvidas__label">
                    Mensaje
                  </label>
                  <textarea
                    name="mensagem"
                    id="mensagem"
                    cols="30"
                    rows="10"
                    placeholder="Hola, me gustaría saber más sobre..."
                  ></textarea>
                </div>
                <button type="submit" className="btns btn-fill">
                  <div className="bg-hover"></div>
                  <p>Enviar mensaje</p>
                </button>
              </form>
              <address>
                <div className="duvidas__campo-contato">
                  <p className="duvidas__label">Dirección</p>
                  <div>
                    Av. <br />
                    Calle. <br />
                    Número, CP. <br />
                  </div>
                </div>
                <div className="duvidas__campo-contato">
                  <p className="duvidas__label">
                    Teléfono
                  </p>
                  <div>
                    55 1234 5678
                  </div>
                </div>
                <div className="duvidas__campo-contato">
                  <p className="duvidas__label">Correo</p>
                  <div>correo@email.com</div>
                </div>
                <div className="duvidas__campo-contato">
                  <p className="duvidas__label">
                    Siguenos en
                  </p>
                  <ul className="duvidas__redes-sociais">
                    <li>
                      <a href="#">
                        <img
                          src={iconInsta}
                          alt="instagram"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={iconFacebook} alt="facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={iconYoutube} alt="youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </address>
            </div>
          </div>
          <div className="profissionais__bg-blob-1" data-anima="translate-left">
            <img src={blob3} alt="" />
          </div>
          <div
            className="profissionais__bg-blob-2"
            data-anima="translate-bottom"
          >
            <img src={blob2} alt="" />
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="footer__infos">
            <nav className="footer__menu">
              <p className="footer__titulos">
                Menu
              </p>
              <ul>
                <li>
                  <a href="#">Inicio</a>
                </li>
                <li>
                  <a href="#">Consultas</a>
                </li>
                <li>
                  <a href="#">Exámenes</a>
                </li>
                <li>
                  <a href="#">Sobre nosotros</a>
                </li>
                <li>
                  <a href="#">Contacto</a>
                </li>
                <li>
                  <a href="#">Resultados</a>
                </li>
                <li>
                  <a href="#">Agendar cita</a>
                </li>
                <li>
                  <a href="#">
                    Agendar examen
                  </a>
                </li>
              </ul>
            </nav>
            <address>
              <div className="footer__address-item">
                <p className="footer__titulos">Dirección</p>
                <div>
                  Av. <br />
                  Calle. <br />
                  Número, CP <br />
                </div>
              </div>
              <div className="footer__address-item">
                <p className="footer__titulos">Teléfono</p>
                <div>55 1234 5678</div>
              </div>
            </address>
            <address>
              <div className="footer__address-item">
                <p className="footer__titulos">Correo</p>
                <div>correo@email.com</div>
              </div>
              <div className="footer__address-item">
                <p className="footer__titulos">
                  Siguenos en
                </p>
                <ul className="footer__redes-sociais">
                  <li>
                    <a href="#">
                      <img
                        src={iconInsta}
                        alt="instagram"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={iconFacebook} alt="facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={iconYoutube} alt="youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </address>
            <div className="footer__vet">
              <span className="titulo">
                Veterinaria
              </span>
              <p>
                Información<br />
                adiccional <br />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
