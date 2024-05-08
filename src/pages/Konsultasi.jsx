
import Stack from "react-bootstrap/Stack";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { UserContext } from "../context/UserContex";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

const Konsultasi = ({ img, title, descrip, coba }) => {
  return (
    <div className="hero hero-view" id="hero">
      <Navbar />
      <Container>
        <Row className="mb-md-5 text-center">
          <Col lg={6}>
            <div className="text-center text-lg-start mt-3">
              <img className="hero-img img-fluid float-start mx-5" src={"https://res.cloudinary.com/damsz0xlx/image/upload/v1685717659/Assets/konsultasi_h27iqj.png"} alt="..." style={{ width: "75%" }} />
            </div>
          </Col>
          <Col lg={6} py-lg-5>
            <div className="hero-content content-1 py-5">
              <h1 className="text-lg-start fw-bold main-title">
                {" "}
                {"Yuk Ikut"} <br /> <span className="singkatan ">{"Konsultasi Gratis !"}</span>{" "}
              </h1>
              <p className="text-lg-start mt-lg-2 main-content fs-5">{"Konsultasikan masalah status gizi anak secara gratis melalui layanan WhatsApp petugas kesehatan gizi yang telah berpengalaman dengan nyaman dari rumah Anda sendiri."}</p>
            </div>
            <div className="text-lg-start">
              <Link to="/chat" className="rounded-5 btncek">
                Konsultasi Sekarang
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>

    
  );
};

export default Konsultasi;
