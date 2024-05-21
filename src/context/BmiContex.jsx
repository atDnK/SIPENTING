import React, { createContext, useState } from "react";

export const BmiContext = createContext();

export const BmiProvider = ({ children }) => {
  const [nama, setNama] = useState("");
  const [jk, setJk] = useState("");
  const [bb, setBb] = useState("");
  const [tl, setTl] = useState("");
  const [umur, setUmur] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [hasil, setHasil] = useState("");

  const calculateBmi = () => {
    //agar bilai inputan tidak minus dan 0
    if (bb <= 0 || tinggi <= 0 || umur <= 0) {
      setHasil("Berat badan dan tinggi harus lebih dari 0");
      return;
    }

    // Menghitung nilai BMI
    const tb = Math.pow(tinggi / 100, 2);
    const bmi = bb / tb;

    // Menentukan kategori BMI
    let kategori = "";
    if (umur < 5) {
      // Berdasarkan Peraturan Kemenkes, tabel untuk anak usia 0-5 tahun
      if (bmi < 12) {
        kategori = "Gizi kurang";
      } else if (bmi >= 12.9 && bmi < 16.6) {
        kategori = "Normal";
      } else if (bmi >= 16.6 && bmi < 18.3) {
        kategori = "Gizi lebih";
      }
      else {
        kategori = "Obesitas";
      }
    } else { // Berdasarkan Peraturan Kemenkes, tabel untuk anak usia 5-18 tahun
      if (bmi < 14) {
        kategori = "Gizi kurang";
      } else if (bmi >= 14.0 && bmi < 17.0) {
        kategori = "Normal";
      } else if (bmi >= 17.0 && bmi < 25.0) {
        kategori = "Gizi lebih";
      } else {
        kategori = "Obesitas";
      }
    }

    // Menyimpan hasil BMI
    setHasil(` ${bmi.toFixed(2)} (${kategori})`);
  };

  const setBbHandler = (value) => {
    const bbValue = value <= 0 ? "" : value.length <= 3 ? value : value.slice(0, 3);
    setBb(bbValue);
  };
  const setTinggiHandler = (value) => {
    const tinggiValue = value <= 0 ? "" : value.length <= 3 ? value : value.slice(0, 3);
    setTinggi(tinggiValue);
  };
  const setUmurHandler = (value) => {
    const umurValue = value <= 0 ? "" : value;
    setUmur(umurValue);
  };

  const clearData = () => {
    setNama("");
    setJk("");
    setBb("");
    setTl("");
    setUmur("");
    setTinggi("");
    setHasil("");
  };

  return (
    <BmiContext.Provider
      value={{
        nama,
        setNama,
        jk,
        setJk,
        bb,
        setBb: setBbHandler,
        tl,
        setTl,
        umur,
        setUmur: setUmurHandler,
        tinggi,
        setTinggi: setTinggiHandler,
        hasil,
        calculateBmi,
        clearData,
      }}
    >
      {children}
    </BmiContext.Provider>
  );
};
