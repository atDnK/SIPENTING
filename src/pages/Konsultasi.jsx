import HeroCekKon from "../components/HeroCekKonsul";
import Stack from "react-bootstrap/Stack";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { UserContext } from "../context/UserContex";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

function Konsultasi() {
  const { isConsulted, handleConsult } = useContext(UserContext);
  return (
    <>
      <div>
          <Navbar />
          <HeroCekKon
            img={"https://res.cloudinary.com/damsz0xlx/image/upload/v1685717659/Assets/konsultasi_h27iqj.png"}
            coba={"Yuk Ikut"}
            title={"Konsultasi Gratis !"}
            descrip={"Konsultasikan masalah status gizi anak secara gratis melalui layanan WhatsApp petugas kesehatan gizi yang telah berpengalaman dengan nyaman dari rumah Anda sendiri."}
            
          />
          <Row className="mb-md-0 mb-5">
          <Col lg={6}>
          <div className="hero text-lg-end">
                <Link to="/cekgizi" className="rounded-5 btncek">
                  Coba Cek Gizi
                </Link>
              </div>
          </Col>
          </Row>
          <Footer />
      </div>
    </>
  );
}

export default Konsultasi;
