import React, { useContext } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { BmiContext } from "../context/BmiContex";
import BoysBbZScoreDataset from "./StatusGizi/data/boysBbZScoreDataset";
import GirlsBbZScoreDataset from "./StatusGizi/data/girlsBbZScoreDataset";
import BoysTbZScoreDataset from "./StatusGizi/data/boysTbZScoreDataset";
import GirlsTbZScoreDataset from "./StatusGizi/data/girlsTbZScoreDataset";

const BmiCalculator = () => {
  const {
    nama,
    setNama,
    jk,
    setJk,
    bb,
    setBb,
    tl,
    setTl,
    umur,
    setUmur,
    tinggi,
    setTinggi,
    hasil,
    calculateBmi,
    clearData,
  } = useContext(BmiContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBmi();
  };

  const handleReset = () => {
    clearData();
  };

  const heightCategoryDecider = (height, gender, ageInMonth) => {
    console.log("tes", height, gender, ageInMonth);
    console.log(gender === "Laki-laki");
    const dataset =
      gender === "Laki-laki"
        ? BoysTbZScoreDataset
        : GirlsTbZScoreDataset;
    const heightStandards = dataset.find(
      (data) => data.Month === parseInt(ageInMonth)
    );
    console.log(heightStandards);
    if (heightStandards) {
      const { SD3neg, SD2neg, SD1neg, SD0, SD1, SD2, SD3 } = heightStandards;

      if (height <= SD3neg) {
        return "Sangat pendek";
      } else if (height > SD3neg && height <= SD2neg) {
        return "Pendek";
      } else if (height > SD2neg && height <= SD1neg) {
        return "Normal";
      } else if (height > SD1neg && height <= SD0) {
        return "Normal";
      } else if (height > SD0 && height <= SD1) {
        return "Normal";
      } else if (height > SD1 && height <= SD2) {
        return "Normal";
      } else if (height > SD2 && height <= SD3) {
        return "Normal";
      } else {
        return "Tinggi";
      }
    }

    return "Tidak ada data";
  };

  const weightCategoryDecider = (weight, gender, ageInMonth) => {
    console.log("tes", weight, gender, ageInMonth);
    console.log(gender === "Laki-laki");
    const dataset =
      gender === "Laki-laki"
        ? BoysBbZScoreDataset
        : GirlsBbZScoreDataset;
    const weightStandards = dataset.find(
      (data) => data.Month === parseInt(ageInMonth)
    );
    console.log(weightStandards);
    if (weightStandards) {
      const { SD3neg, SD2neg, SD1neg, SD0, SD1, SD2, SD3 } = weightStandards;

      if (weight <= SD3neg) {
        return "Sangat kurang";
      } else if (weight > SD3neg && weight <= SD2neg) {
        return "Berat kurang";
      } else if (weight > SD2neg && weight <= SD1neg) {
        return "Normal";
      } else if (weight > SD1neg && weight <= SD0) {
        return "Normal";
      } else if (weight > SD0 && weight <= SD1) {
        return "Normal";
      } else if (weight > SD1 && weight <= SD2) {
        return "Berat lebih";
      } else if (weight > SD2 && weight <= SD3) {
        return "Berat lebih";
      } else {
        return "Obesitas";
      }
    }

    return "Tidak ada data";
  };

  return (
    <Container className='mt-3  form'>
      <h2
        className='fw-bold mb-4 fs-3 text-center '
        style={{ color: "#3a3c3b" }}
      >
        Masukkan Data Index Cek Gizi
      </h2>
      <Form onSubmit={handleSubmit} className='text-start fw-bold'>
        <Row className='mt-5'>
          <Col md={6}>
            <Form.Group>
              <Form.Label className='p-2 fs-6 fw-semibold fw-1'>
                Nama Depan
              </Form.Label>
              <Form.Control
                className='rounded-5'
                type='text'
                value={nama} 
                onChange={(e) => setNama(e.target.value)}
                placeholder='Masukkan Nama Depan'
                required
                pattern='[A-Za-z\s]*' // Hanya huruf dan spasi yang diperbolehkan
                title='Mohon masukkan hanya huruf dan spasi'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className='p-2 fs-6 fw-semibold'>
                Pilih Jenis Kelamin
              </Form.Label>
              <Form.Select
                className='rounded-5'
                value={jk}
                onChange={(e) => setJk(e.target.value)}
                required
              >
                <option value=''>Jenis Kelamin :</option>
                <option value='Laki-laki'>Laki-laki</option>
                <option value='Perempuan'>Perempuan</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label className='p-2 fs-6 fw-semibold'>
                Berat Badan (kg)
              </Form.Label>
              <Form.Control
                className='rounded-5'
                type='number'
                value={bb}
                onChange={(e) => setBb(e.target.value)}
                placeholder='Masukkan Berat Badan'
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className='p-2 fs-6 fw-semibold'>
                Nama Belakang
              </Form.Label>
              <Form.Control
                className='rounded-5'
                type='text'
                value={tl}
                onChange={(e) => setTl(e.target.value)}
                placeholder='Masukkan Nama Belakang'
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className='p-2 fs-6 fw-semibold'>
                Umur (bulan)
              </Form.Label>
              <Form.Control
                className='rounded-5'
                type='number'
                value={umur}
                onChange={(e) => setUmur(e.target.value)}
                placeholder='Masukkan Umur'
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className='p-2 fs-6 fw-semibold'>
                Tinggi Badan (cm)
              </Form.Label>
              <Form.Control
                className='rounded-5'
                type='number'
                value={tinggi}
                onChange={(e) => setTinggi(e.target.value)}
                placeholder='Masukkan Tinggi'
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <div className='mt-4 text-center text-lg-center mb-5 mt-5'>
          <Button
            type='submit'
            className='btn-custom btclor py-2 px-5 rounded-5 fs-6 fw-semibold'
            id='cekstunting1'
            style={{ backgroundColor: "#54bca4", borderColor: "white" }}
          >
            Mulai Cek
          </Button>
        </div>
      </Form>

      {hasil && (
        <Alert variant='success' className='mt-4  '>
          <div className='row'>
            <div
              className='col-lg-9 offset-lg-2 d-flex align-items-center justify-content-center'
              style={{ color: "#3a3c3b" }}
            >
              <div className='fw-semibold fs-5 float-start w-50'>
                <div className='row'>
                  <div className='col-md-6'>Nama</div>
                  <div className='col-md-6'> : {nama} {tl}</div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>Umur</div>
                  <div className='col-md-6'> : {umur} bulan</div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>Berat Badan</div>
                  <div className='col-md-6'> : {bb} kg</div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>Tinggi Badan</div>
                  <div className='col-md-6'> : {tinggi} cm</div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>jenis kelamin</div>
                  <div className='col-md-6'> : {jk}</div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>IMT </div>
                  <div className='col-md-6'> : {hasil}</div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>BB/U </div>
                  <div className='col-md-6'>
                    : {weightCategoryDecider(bb, jk, umur)}
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>TB/U </div>
                  <div className='col-md-6'>
                    : {heightCategoryDecider(tinggi, jk, umur)}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-8 offset-lg-2 text-center'>
              <Button
                variant='danger'
                className='btn-custom mt-3 py-2 px-5 rounded-5 fs-6 fw-semibold'
                onClick={handleReset}
              >
                Mulai Lagi
              </Button>
            </div>
          </div>
        </Alert>
      )}
    </Container>
  );
};

export default BmiCalculator;
