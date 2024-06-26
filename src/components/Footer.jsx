import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer(params) {
  return (
    <>
      <footer className="footercolo px-md-0 px-3">
        <Container>
          <Row className="pt-5 pb-5 d-flex justify-content-around">
            <Col md={4} lg={4}>
              <Link to="/">
                <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201273/Assets/white-logo_oh7nw5.png" className="flogo" width={"180"} alt="" />
              </Link>

              <p className="fslogan fw-medium text-white mt-4 fs-6">
                Cegah stunting itu penting <br /> bersama <span className="dev">SIPENTING</span>. <br />
                <span className="dev">#SayNoToStunting</span>
              </p>
              <div className="ficon d-flex justify-content-start">
                <a href="https://www.facebook.com/puskesmas.tirto.54" target="_blank">
                <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201270/Assets/Facebook_u6ren2.png" width={"60"} alt="" />
                </a>
                <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201272/Assets/Twitter_n5xxvy.png" width={"60"} alt="" />
                <a href="https://www.instagram.com/uptpuskesmastirto/" target="_blank">
                  <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201271/Assets/Instagram_leicpi.png" width={"60"} alt="" />
                </a>
              </div>
            </Col>
            <Col md={4} lg={3} className="mt-4 mt-md-0 ffotermenu">
              <div>
                <h5 className="text-white fw-bold fs-5">Halaman Menu</h5>
                <div className="mt-3 fw-medium text-white">
                  <Link to="/" className="d-block text-white mb-3 text-decoration-none fs-6">
                    Beranda
                  </Link>
                  <Link to="/cekgizi" className="d-block text-white mb-3 text-decoration-none fs-6">
                    Cek Gizi
                  </Link>
                  <Link to="/" className="d-block text-white mb-3 text-decoration-none fs-6">
                    Layanan Kami
                  </Link>
                  <Link to="/register" className="d-block text-white mb-3 text-decoration-none fs-6">
                    Daftar
                  </Link>
                  <Link to="/login" className="d-block text-white mb-3 text-decoration-none fs-6">
                    Masuk
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={4} lg={2} className="mt-4 mt-md-0">
              <div>
                <h5 className="text-white fw-bold fs-5">Layanan</h5>
                <div className="mt-3 fw-medium text-white">
                  <Link to="/konsultasi" className="d-block text-white mb-3 text-decoration-none fs-6">
                    Konsultasi
                  </Link>
                  <Link to="/cekgizi" className="d-block text-white mb-3 text-decoration-none fs-6">
                    Cek Gizi
                  </Link>
                  <Link to="/artikel" className="d-block text-white mb-3 text-decoration-none fs-6">
                    Artikel
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={4} lg={3} className="mt-4 mt-md-0">
              <div>
                <h5 className="text-white fw-bold fs-5">Kontak Kami</h5>
                <div className="mt-3 fw-medium text-white">
                  <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201270/Assets/email_asuufb.png" alt="" />
                  <span>
                    <a className="d-inline-flex ps-2 text-white mb-3 text-decoration-none fs-6" href="mailto:fe9sipenting@gmail.com" target="_blank">
                      pusktirto@gmail.com
                    </a>
                  </span>
                  <br />
                  <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201273/Assets/telp_e9see9.png" alt="" />
                  <span>
                    <a className="d-inline-flex ps-2 text-white mb-3 text-decoration-none fs-6" href="https://wa.me/+6285754737264" target="_blank">
                      085754737264 (cs)
                    </a>
                  </span>
                  <br />
                  <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201271/Assets/location_emsdtc.png" alt="" />
                  <span>
                    <a className="d-inline-flex ps-2 text-white mb-3 text-decoration-none fs-6" href="https://maps.app.goo.gl/yQRKVnm1oVPi96GZ7" target="_blank">
                      Jl. K.H. Ahmad Dahlan, <br /> Kota Pekalongan, Jawa <br /> tengah 51115
                    </a>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          <hr />
          <Row className="mt-4 pb-4 d-flex justify-content">
            <Col lg={4} className="fcopyright fs-6 fw-medium text-white">
              © 2023 <span className="dev">SIPENTING Teams</span> All rights reserved
            </Col>
            <Col lg={2} className="fsyarat fs-6 fw-medium text-white">
              Syarat & Ketentuan
            </Col>
            <Col lg={2} className="fkebijakan fs-6 fw-medium text-white">
              Kebijakan Privasi
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
