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
              <a onClick={handleCloseMenu} href="/home">Home</a>
            </li>
            <li>
              <a onClick={handleCloseMenu} href="/consultas">Consultas</a>
            </li>
            <li>
              <a onClick={handleCloseMenu} href="#">Exames</a>
            </li>
            <li>
              <a onClick={handleCloseMenu} href="#">Resultados</a>
            </li>
            <li>
              <a onClick={handleCloseMenu} href="#">Agendar</a>
            </li>
            <li>
              <a onClick={handleCloseMenu} href="#">Sobre</a>
            </li>
            <li>
              <a onClick={handleCloseMenu} href="#">Contato</a>
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
            <span className="titulo">Vet</span>
            <div className="entrada__textos">
              <h1 className="titulo" data-anima="left" data-delay="200">
                Curabitur feugiat
                <br />
                mi vitae <span>eleifend</span> <br />
                pharetra.
              </h1>
              <p
                className="entrada__paragrafo"
                data-anima="left"
                data-delay="400"
              >
                Mauris justo urna, maximus quis eros
                <br />
                vel, blandit pellentesque purus
              </p>
              <div className="entrada__btns" data-anima="left" data-delay="600">
                <a href="#" className="btns btn-border">
                  <div className="bg-hover"></div>
                  <p>Resultados</p>
                </a>
                <a href="#" className="btns btn-fill">
                  <div className="bg-hover"></div>
                  <p>Agende uma visita</p>
                </a>
              </div>
            </div>
            <div className="entrada__img" data-anima="translate-left">
              <img src={imgBanner} alt="gato amarelo listrado" />
            </div>
            <address aria-label="endereço" className="entrada__endereco">
              <span>Rua Lorem 123 - Ipsum</span>
              <span>Lorem - IP</span>
            </address>
            <div
              aria-label="horario de funcionamento"
              className="entrada__funcionamento"
              data-anima="left"
              data-delay="800"
            >
              <p className="entrada__aberto-fechado"></p>
              <div>
                <p data-open="aberto">Segunda a sexta</p>
                <p>
                  <time dateTime="08:00">8h:00</time> às
                  <time dateTime="21:00">21h:00</time>
                </p>
              </div>
              <div>
                <p>Sabado e domingo</p>
                <p>
                  <time dateTime="08:00">8h:00</time> às
                  <time dateTime="16:00">16h:00</time>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section aria-label="valores" id="valores">
          <div className="container">
            <ul className="valores__lista">
              <li>Etiam sed tristique massa</li>
              <li>Nulla convallis nisi tellus, cursus mattis</li>
              <li>Suspendisse aliquam ipsum eget nisi</li>
              <li>Pellentesque id dignissim lorem</li>
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
              <h2 className="titulo especialidades__titulo">Especialidades</h2>
              <p className="padding-txt">
                Donec viverra mauris quis
                <br />
                elementum laoreet
              </p>
              <a href="#" className="btns btn-fill">
                <div className="bg-hover"></div>
                <p>Agende uma visita</p>
              </a>
            </header>
            <ul className="especialidades__lista">
              <li>
                <a href="#">Clínica Geral</a>
              </li>
              <li>
                <a href="#">Nefrologia</a>
              </li>
              <li>
                <a href="#">Nutrição</a>
              </li>
              <li>
                <a href="#">Endocrinologia</a>
              </li>
              <li>
                <a href="#">Dermatologia</a>
              </li>
              <li>
                <a href="#">Oncologia</a>
              </li>
              <li>
                <a href="#">Cardiologia</a>
              </li>
              <li>
                <a href="#">Neurologia</a>
              </li>
              <li>
                <a href="#">Acupuntura</a>
              </li>
              <li>
                <a href="#">Fisioterapia</a>
              </li>
              <li>
                <a href="#">Odontologia</a>
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
              <h2 className="titulo">Exames</h2>
              <p className="padding-txt">
                Donec viverra mauris quis
                <br />
                elementum laoreet
              </p>
              <a href="#" className="btns btn-border">
                <div className="bg-hover"></div>
                <p>Marque seu exame</p>
              </a>
            </header>
            <ul className="exames__lista">
              <li>
                <a href="#">Exame de sangue</a>
              </li>
              <li>
                <a href="#">Exame de urina</a>
              </li>
              <li>
                <a href="#">Ecocardiograma</a>
              </li>
              <li>
                <a href="#">Ultrassonografia</a>
              </li>
              <li>
                <a href="#">Radiografia</a>
              </li>
              <li>
                <a href="#">Pressão arterial</a>
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
              <h2 className="titulo">Conheça nossos profissionais</h2>
              <p className="padding-txt">Mauris dignissim rhoncus erat</p>
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
                      <div className="profissionais__item-bg">Saiba mais</div>
                      <div className="profissionais__img">
                        <img src={pro1} alt="Thaís" />
                      </div>
                      <div className="profissionais__infos">
                        <p className="profissionais__nome">Thaís</p>
                        <p>Veterinária</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="profissionais__item-bg">Saiba mais</div>
                      <div className="profissionais__img">
                        <img src={pro2} alt="Victor" />
                      </div>
                      <div className="profissionais__infos">
                        <p className="profissionais__nome">Victor</p>
                        <p>Veterinário</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="profissionais__item-bg">Saiba mais</div>
                      <div className="profissionais__img">
                        <img src={pro3} alt="Bianca" />
                      </div>
                      <div className="profissionais__infos">
                        <p className="profissionais__nome">Bianca</p>
                        <p>Veterinária</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="profissionais__item-bg">Saiba mais</div>
                      <div className="profissionais__img">
                        <img src={pro4} alt="Amanda" />
                      </div>
                      <div className="profissionais__infos">
                        <p className="profissionais__nome">Amanda</p>
                        <p>Enfermeira</p>
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
              <h2 className="titulo">Sobre o Vet</h2>
              <p>
                Nunc blandit nisl sit amet nibh fermentum interdum. Ut sagittis
                feugiat dignissim. Proin tellus nisi, gravida vehicula sapien a,
                cursus auctor lorem. Integer mattis urna sem, eu congue est
                sagittis.
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
              <h2 className="titulo">Possui alguma dúvida?</h2>
              <p className="padding-txt">Entre em contato com a gente!</p>
            </header>
            <div className="duvidas__container">
              <form action="#" className="duvidas__form">
                <div className="duvidas__campo-form">
                  <label htmlFor="nome" className="duvidas__label">
                    Seu nome
                  </label>
                  <input type="text" name="nome" id="nome" placeholder="Ana" />
                </div>
                <div className="duvidas__campo-form">
                  <label htmlFor="email" className="duvidas__label">
                    Seu email
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
                    Assunto da mensagem
                  </label>
                  <input
                    type="text"
                    name="assunto"
                    id="assunto"
                    placeholder="Sobre uma coisa..."
                  />
                </div>
                <div className="duvidas__campo-form">
                  <label htmlFor="mensagem" className="duvidas__label">
                    Mensagem
                  </label>
                  <textarea
                    name="mensagem"
                    id="mensagem"
                    cols="30"
                    rows="10"
                    placeholder="Olá! Gostaria de saber mais sobre..."
                  ></textarea>
                </div>
                <button type="submit" className="btns btn-fill">
                  <div className="bg-hover"></div>
                  <p>Enviar mensagem</p>
                </button>
              </form>
              <address>
                <div className="duvidas__campo-contato">
                  <p className="duvidas__label">Endereço</p>
                  <div>
                    Rua Lorem, 123 <br />
                    Ipsum <br />
                    12345-678, Lorem - IP <br />
                  </div>
                </div>
                <div className="duvidas__campo-contato">
                  <p className="duvidas__label">Telefone</p>
                  <div>+55 (00) 1234-5678</div>
                </div>
                <div className="duvidas__campo-contato">
                  <p className="duvidas__label">Email para contato</p>
                  <div>vets@email.com</div>
                </div>
                <div className="duvidas__campo-contato">
                  <p className="duvidas__label">Siga-nos</p>
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
              <p className="footer__titulos">Menu</p>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Consultas</a>
                </li>
                <li>
                  <a href="#">Exames</a>
                </li>
                <li>
                  <a href="#">Sobre</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
                <li>
                  <a href="#">Resultados</a>
                </li>
                <li>
                  <a href="#">Agendar consulta</a>
                </li>
                <li>
                  <a href="#">Agendar exame</a>
                </li>
              </ul>
            </nav>
            <address>
              <div className="footer__address-item">
                <p className="footer__titulos">Endereço</p>
                <div>
                  Rua Lorem, 123 <br />
                  Ipsum <br />
                  12345-678, Lorem - IP <br />
                </div>
              </div>
              <div className="footer__address-item">
                <p className="footer__titulos">Telefone</p>
                <div>+55 (00) 1234-5678</div>
              </div>
            </address>
            <address>
              <div className="footer__address-item">
                <p className="footer__titulos">Email</p>
                <div>vets@email.com</div>
              </div>
              <div className="footer__address-item">
                <p className="footer__titulos">Siga-nos</p>
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
              <span className="titulo">Vet</span>
              <p>
                Donec quis mi justo. <br />
                Proin id eros varius, <br />
                fermentum dolor
              </p>
            </div>
          </div>
          <span className="footer__made-by">
            Projeto feito por
            <a href="https://github.com/aridsm">Ariane Morelato</a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
