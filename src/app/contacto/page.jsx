import React from "react";
import "../../css/screens/contacto/contacto.css";
import Link from "next/link";

function Contacto() {
  return (
    <div className="section-contacto container-fluid py-0 py-lg-5 text-white">
      <div className="container pt-5">
        <div id="bienvenida-contacto" className="row py-5 mt-5 mt-lg-2 mb-5">
          <div className="col-10 col-lg-7 mt-5 mt-lg-5 mb-3 mb-lg-0 pt-5">
            <div className="py-0 py-lg-4 pt-5 mt-5 mt-lg-0">
              <p className="font-size-1 text-white text-uppercase mt-5 mt-lg-0">
                <span className="txt-color-blue">HOLA,</span> <br></br>
                ESTAMOS PARA TI
              </p>
              <p className="d-none d-lg-block fs-5 text-white mb-4">
                Nos gustaría platicar contigo.
              </p>
              <p className="d-block d-lg-none fs-6 text-white mb-4">
                Nos gustaría platicar contigo.
              </p>
            </div>
          </div>
        </div>

        <div id="contactos" className="row mt-0 mt-lg-5 pt-0 pt-lg-5">
          <div className="col mt-0 mt-lg-5">
            <div className="text-center mt-0 mt-lg-5">
              <h2 className="mb-3">UN UNIVERSO DE POSIBILIDADES</h2>
              <p>
                Escríbenos o llámanos, siempre estamos disponibles para
                ayudarte.
              </p>
              <div className="row mt-5">
                <div className="col mb-3 mb-lg-0">
                  <Link
                    href="https://api.whatsapp.com/send?phone=5561196686&text=Me%20interesa%20informes"
                    className="text-decoration-none text-white"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="bg-dark bg-gradiente bg-opacity-50 shadow rounded p-3">
                      <p className="txt-color-blue fs-5"> WhatsApp</p>
                      <p> 55 611 966 86</p>
                    </div>
                  </Link>
                </div>
                <div className="col mb-3 mb-lg-0">
                  <Link
                    href="mailto:carboncillomtk@gmail.com?subject=Me%20interesa%20informes"
                    className="text-decoration-none text-white"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-dark bg-gradiente bg-opacity-50 shadow rounded p-3">
                      <p className="txt-color-blue fs-5"> Correo</p>
                      <p>carboncillomtk@gmail.com</p>
                    </div>
                  </Link>
                </div>
                <div className="col mb-3 mb-lg-0">
                  <Link
                    href="https://www.facebook.com/agenciacarboncillo"
                    target="_blank"
                    className="text-decoration-none text-white"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-dark bg-gradiente bg-opacity-50 shadow rounded p-3">
                      <p className="txt-color-blue fs-5"> Facebook</p>
                      <p>@agenciacarboncillo</p>
                    </div>
                  </Link>
                </div>
                <div className="col mb-3 mb-lg-0">
                  <Link
                    href="https://www.instagram.com/c_arboncillo/"
                    target="_blank"
                    className="text-decoration-none text-white"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-dark bg-gradiente bg-opacity-50 shadow rounded p-3">
                      <p className="txt-color-blue fs-5"> Instagram</p>
                      <p> @c_arboncillo</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="formulario-contacto"
          className="row mt-0 mt-lg-5 pt-0 pt-lg-5 d-flex justify-content-center"
        >
          <div className="col-auto mt-5">
            <div className="text-center mt-5">
              <h2 className="mb-3">ESCRÍBENOS</h2>
              <form>
                <div className="row px-0 px-lg-5 mx-0 mx-lg-5 mt-0 mt-lg-5 d-flex justify-content-center">
                  <div class="col-12 col-lg-5 mb-4">
                    <label for="name" class="form-label">
                      Nombres y apellidos
                    </label>
                    <input
                      class="form-control"
                      id="name"
                      placeholder="Juan Rodríguez Brito"
                    />
                  </div>

                  <div class="col-12 col-lg-5 mb-4">
                    <label for="phone" class="form-label">
                      Número de teléfono
                    </label>
                    <input
                      class="form-control"
                      id="phone"
                      placeholder="(55)4335-3453"
                    />
                  </div>

                  <div class="col-12 col-lg-6 mb-4">
                    <label for="email" class="form-label">
                      Correo eléctronico
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div class="col-12 col-lg-6 mb-4">
                    <label for="mensaje" class="form-label">
                      Mensaje
                    </label>
                    <textarea
                      class="form-control"
                      id="mensaje"
                      rows="3"
                    ></textarea>
                  </div>

                  <div className="col-auto">
                    <button type="submit" class="btn btn-outline-light px-4 btn-lg fs-5">
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
