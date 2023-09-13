import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

function Footer() {
  return (
    <div className="container-fluid bg-black py-4 py-lg-5 fs-5">
      <div className="container text-white">
        <div className="row d-flex justify-content-center mb-5">
          <div className="col-10 col-lg-3 p-5 d-flex justify-content-center">
            <div className="mt-0 mt-lg-2">
              <Image
                className="d-none d-lg-block img-fluid rounded mb-3 "
                src={require("../../img/logo/logo-compact.webp")}
                alt=""
              />
              <Image
                className="d-block d-lg-none rounded mb-3"
                width={100}
                src={require("../../img/logo/logo-compact.webp")}
                alt=""
              />
            </div>
          </div>
          <div className="col-11 col-lg-4 d-flex justify-content-center text-center mt-3 mt-lg-0 mb-4 mb-lg-0">
            <div className="mt-0 mt-lg-5">
              <p className="font-weight-bold mb-3 fs-4">¡Contáctanos!</p>
              <Link
                href="mailto:carboncillomtk@gmail.com?subject=Me%20interesa%20informes"
                className="text-decoration-none text-white"
                rel="noopener noreferrer"
              >
                <p className="mb-1 fs-5">
                  <MdOutlineEmail className="me-1" />
                  carboncillomtk@gmail.com
                </p>
              </Link>
              <Link
                href="tel:+5561196686"
                className="text-decoration-none text-white"
                rel="noopener noreferrer"
              >
                <p className="mb-1 fs-5">
                  <BsTelephone className="me-1" />
                  55 611 966 86
                </p>
              </Link>
              <Link
                href="https://www.instagram.com/c_arboncillo/"
                target="_blank"
                className="text-decoration-none text-white"
                rel="noopener noreferrer"
              >
                <p className="mb-1 fs-5">
                  <BsInstagram className="me-1" /> @c_arboncillo
                </p>
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-4 background-purple shadow d-flex justify-content-center mt-5 mt-lg-0 rounded p-3">
            <div className="p-2 p-lg-3 rounded">
              <p className="font-weight-bold text-center fs-3 mb-4 mb-lg-3">
                Déjanos tu correo y nos contactaremos contigo
              </p>
              <form>
                <div className="row">
                  <div className="col-12 mb-4">
                    <label htmlFor="footer-email" className="form-label">
                      Ingresa tu correo:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="footer-email"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div className="col-12 mb-4">
                    <label htmlFor="footer-comentario" className="form-label">
                      Describe cuales de nuestros servicio es de tu interes:
                    </label>
                    <textarea
                      className="form-control"
                      id="footer-comentario"
                      rows="3"
                    ></textarea>
                  </div>
                </div>

                <button className="btn btn-outline-light btn-lg" type="submit">
                  Iniciar ahora
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-lg-6">
            <p className="fs-6 mb-0 text-center text-lg-start">
              Todos los derechos reservados | Carboncillo © 2023
            </p>
          </div>
          <div className="col-12 col-lg-6 text-center text-lg-end mb-3 mb-lg-0 order-first order-lg-last">
            <Link
              href="https://www.facebook.com/agenciacarboncillo"
              target="_blank"
              className="text-decoration-none text-white"
              rel="noopener noreferrer"
            >
              <ImFacebook />
            </Link>
            <Link
              href="https://www.instagram.com/c_arboncillo/"
              target="_blank"
              className="text-decoration-none text-white"
              rel="noopener noreferrer"
            >
              <BsInstagram className="mx-5" />
            </Link>
            <Link
              href="mailto:carboncillomtk@gmail.com?subject=Me%20interesa%20informes"
              className="text-decoration-none text-white"
              rel="noopener noreferrer"
            >
              <MdOutlineEmail />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
