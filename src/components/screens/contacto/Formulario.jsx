import React from "react";

function Formulario() {
  return (
    <div
      id="formulario-contacto"
      className="row mt-0 mt-lg-5 pt-0 pt-lg-5 d-flex justify-content-center"
    >
      <div className="col-auto mt-5">
        <div className="text-center mt-5">
          <h2 className="mb-3">ESCRÍBENOS</h2>
          <form>
            <div className="row px-0 px-lg-5 mx-0 mx-lg-5 mt-0 mt-lg-5 d-flex justify-content-center">
              <div className="col-12 col-lg-5 mb-4">
                <label htmlFor="name" className="form-label">
                  Nombres y apellidos
                </label>
                <input
                  className="form-control"
                  id="name"
                  placeholder="Juan Rodríguez Brito"
                />
              </div>

              <div className="col-12 col-lg-5 mb-4">
                <label htmlFor="phone" className="form-label">
                  Número de teléfono
                </label>
                <input
                  className="form-control"
                  id="phone"
                  placeholder="(55)4335-3453"
                />
              </div>

              <div className="col-12 col-lg-6 mb-4">
                <label htmlFor="email" className="form-label">
                  Correo eléctronico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>

              <div className="col-12 col-lg-6 mb-4">
                <label htmlFor="mensaje" className="form-label">
                  Mensaje
                </label>
                <textarea
                  className="form-control"
                  id="mensaje"
                  rows="3"
                ></textarea>
              </div>

              <div className="col-auto">
                <button
                  type="submit"
                  className="btn btn-outline-light px-4 btn-lg fs-5"
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
