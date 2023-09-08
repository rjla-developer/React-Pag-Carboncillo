import React from "react";
import "../../css/screens/filosofia/filosofia.css";

function Filosofia() {
  return (
    <div className="section1 container-fluid py-0 py-lg-5 text-white">
      <div className="container pt-5">
        <div className="row py-5 mt-5 mt-lg-2 mb-5">
          <div className="col-10 col-lg-7 mt-4 mt-lg-5">
            <div className="py-0 py-lg-4">
              <p className="font-size-1 text-white text-uppercase">
                TU ESTILO DE VIDA, ES{" "}
                <span className="txt-color-purple">NUESTRO MANTRA</span>
              </p>
              <p className="d-none d-lg-block fs-5 text-white mb-4">
                Construimos estrategias digitales que impulsen el crecimiento
                sustentable.
              </p>
              <p className="d-block d-lg-none fs-6 text-white mb-4">
                Construimos estrategias digitales que impulsen el crecimiento
                sustentable.
              </p>
              <button className="btn btn-outline-light btn-lg">
                Iniciar ahora
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-5 pt-5">
          <div className="col-12 col-lg-6 bg-dark bg-gradiente shadow rounded p-4 p-lg-5 bg-opacity-50 me-0 me-lg-2">
            <div>
              <p className="txt-color-green">Filosofía</p>
              <p>
                Basamos nuestro trabajo en la cultura de la sociedad, es lo que
                nos inspira, lo que nos mueve, lo que nos rodea, años de
                experiencia regidos por un único objetivo, llevar a nuestros
                clientes más leales a tener una estrategia totalmente basada en
                esta nueva era digital. ¡Sé parte del nuevo mundo!
              </p>
            </div>
          </div>
          <div className="col bg-dark bg-gradiente shadow rounded p-4 p-lg-5 bg-opacity-50 ms-0 ms-lg-2 mt-4 mt-lg-0">
            <div>
              <p className="txt-color-orange">Nosotros</p>
              <p>
                Somos una agencia de marketing digital encargada de potenciar el
                crecimiento de tu negocio en las redes sociales, nuestro trabajo
                se basa en identificar las oportunidades publicitarias adecuadas
                para ti y desarrollar estrategias de marketing efectivas, con el
                fin de alcanzar los objetivos propuestos. ¡Eleva tu marca en el
                mundo digital!
              </p>
            </div>
          </div>
          <div className="col-12 bg-dark bg-gradiente shadow rounded p-4 p-lg-5 bg-opacity-50 mt-4">
            <div className="text-start text-lg-center">
              <p className="txt-color-blue">¿Por qué elegirnos?</p>
              <p>
                Al tratarse de Carboncillo, es la agencia indicada para lograr
                el éxito. Nuestro equipo de expertos aplica tácticas y
                estrategias comprobadas, para aumentar el tráfico orgánico y las
                conversiones de tu empresa. El crecimiento orgánico y alcanzar
                las primeras posiciones en internet no es algo que suceda por
                casualidad, es el resultado de tener una agencia con talento,
                conocimientos y experiencia trabajando contigo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filosofia;
