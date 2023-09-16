"use client";
import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function Formulario() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [messageSuccess, setMessageSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch("https://app-s5uzbnqava-uc.a.run.app/lead-generation-form", {
      method: "POST",
      body: JSON.stringify(formData), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        console.log("Success:", response);
        setMessageSuccess(true);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div
      id="formulario-contacto"
      className="row mt-0 mt-lg-5 pt-0 pt-lg-5 d-flex justify-content-center"
    >
      <div className="col-auto mt-5">
        <div className="text-center mt-5">
          <h2 className="mb-3">ESCRÍBENOS</h2>
          <form onSubmit={handleSubmit}>
            <div className="row px-0 px-lg-5 mx-0 mx-lg-5 mt-0 mt-lg-5 d-flex justify-content-center">
              <div className="col-12 col-lg-5 mb-4">
                <label htmlFor="name" className="form-label">
                  Nombres y apellidos
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Juan Rodríguez Brito"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="col-12 col-lg-5 mb-4">
                <label htmlFor="phone" className="form-label">
                  Número de teléfono
                </label>
                <input
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="(55)4335-3453"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
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
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="col-12 col-lg-6 mb-4">
                <label htmlFor="message" className="form-label">
                  Mensaje
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="invalid-feedback">Este campo es obligatorio.</div>

              {messageSuccess ? (
                <Alert
                  severity="success"
                  className="text-start"
                  onClose={() => {
                    setMessageSuccess(false);
                  }}
                >
                  <AlertTitle className="fw-bold">Enviado.</AlertTitle>
                  Tus datos y mensaje se <strong>han enviado</strong>, nos
                  contactaremos contigo lo antes posible!.
                </Alert>
              ) : null}
              <div className="col-auto mt-3">
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
