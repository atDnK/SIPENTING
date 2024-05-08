import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroLanding from "../components/HeroLanding";
import DataStunting from "../components/DataStunting";
import CarouselLayanan from "../components/CarouselLayanan";
import { Container, Col, Row, Stack } from "react-bootstrap";
import ArticleList from "../components/ListArtikel";
import DataSection from "../components/DataStunting";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroLanding />
      <section className="data">
        <Container>
          <div className="data-content py-5">
            <h4 className="text-center sub-title">Masalah Gizi</h4>
            <h2 className="text-center fw-bold main-title">Balita di Indonesia</h2>
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-5">
            <DataSection img={"https://res.cloudinary.com/damsz0xlx/image/upload/v1683201270/Assets/data1_cl2jy3.png"} title={"21,6 % (TB/U)"} cardText1={"Balita Stunting"} cardText2={"(SSGI, 2022)"} />
            <DataSection img={"https://res.cloudinary.com/damsz0xlx/image/upload/v1683201270/Assets/data2_ficqic.png"} title={"7,7 % (BB/TB)"} cardText1={"Balita Wasting"} cardText2={"(SSGI, 2022)"} />
            <DataSection img={"https://res.cloudinary.com/damsz0xlx/image/upload/v1683201270/Assets/data3_kjhtnn.png"} title={"17,1 % (BB/U)"} cardText1={"Balita Underweight"} cardText2={"(SSGI, 2022)"} />
          </div>
        </Container>
      </section>
      <CarouselLayanan />
      <section className="artikel  mt-5">
        <Container className="text-start">
          <h2 className="fw-bold ms-3 mb-4 pt-2 text-center">Artikel Terkait</h2>
          <Container>
            <Row className="mt-5">
              <ArticleList />
            </Row>
          </Container>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default LandingPage;
