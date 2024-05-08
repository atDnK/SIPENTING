import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function LayananKamiSection() {
  return (
    <section className="layanan-kami" style={{ backgroundColor: "#EEFCF3" }}>
      <div className="data-content py-5">
        <h2 className="text-center fw-bold main-title mt-2">Layanan Kami</h2>
      </div>
      <Carousel interval={1500} className="carousel-dark">
        <CarouselItem>
          <div className="row ps-5 ms-sm-5 align-items-center">
            <div className="col-sm-5 pb-5 ms-sm-5 text-center text-lg-start mt-6">
              <img
                src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201272/Assets/layanan_dbrgnp.png"
                alt=""
                width="400"
                height="400"
                className="img-fluid"
              />
            </div>
            <div className="col-sm-5 text-center pb-4 me-4 mb-5">
              <h5 className="fw-semibold" style={{ color: "#54bca4" }}>
                Artikel
              </h5>
              <p style={{ color: "#1B443B" }}>
                Artikel terkait stunting dapat meningkatkan kesadaran masyarakat akan kondisi stunting pada anak untuk
                mencegah terjadinya stunting.
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="row ps-5 ms-sm-5 align-items-center">
            <div className="col-sm-5 pb-5 ms-sm-5 text-center text-lg-start mt-6">
              <img
                src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201271/Assets/layanan2_ka0pkx.png"
                alt=""
                width="400"
                height="400"
                className="img-fluid"
              />
            </div>
            <div className="col-sm-5 text-center pb-4 me-4 mb-5">
              <h5 className="fw-semibold" style={{ color: "#54bca4" }}>
                Konsultasi
              </h5>
              <p style={{ color: "#1B443B" }}>
                Konsultasi stunting merupakan sarana informasi lebih lanjut mengenai stunting pada anak melalui petugas kesehatan
                UPT Puskesmas Tirto.
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="row ps-5 ms-sm-5 align-items-center">
            <div className="col-sm-5 pb-5 ms-sm-5 text-center text-lg-start mt-6">
              <img
                src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201271/Assets/layanan3_qdb3zq.png"
                alt=""
                width="400"
                height="400"
                className="img-fluid"
              />
            </div>
            <div className="col-sm-5 text-center pb-4 me-4 mb-5">
              <h5 className="fw-semibold" style={{ color: "#54bca4" }}>
                Cek Gizi
              </h5>
              <p style={{ color: "#1B443B" }}>
                Melalui pengecekan gizi ini, orang tua dapat mencoba melakukan pengecekan secara mandiri apakah gizi anak berada di taraf normal atau tidak.
              </p>
            </div>
          </div>
        </CarouselItem>
      </Carousel>
    </section>
  );
}

export default LayananKamiSection;
