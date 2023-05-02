import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import scan from "../assets/icons/scan.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const QRPage = () => {
  const navigate = useNavigate();
  const [qrData, setQrData] = useState("");

  const handleError = (error) => {
    console.error(error);
  };

  const handleScan = async (data) => {
    if (data) {
      // console.log(data);
      try {
        const dataWash = JSON.parse(data.text);

        if (dataWash.hasOwnProperty("washId")) {
          const total = await axios.get(
            `${process.env.REACT_APP_SERVER}/api/wash/${dataWash.washId}`
          );
          if (total.data.hasOwnProperty("title")) {
            navigate(`/wash/${total.data.id}`);
          }
        }
        setQrData(data.text);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <div className="qr-scan-block">
        <QrReader
          delay={300}
          onResult={handleScan}
          className="qr-scan"
          constraints={{ facingMode: "environment" }}
        />
        <div className="qr-scan-content">
          <p className="qr-scan-content-text">{qrData}</p>
          <img className="qr-scan-icon" src={scan} alt="icon" />
        </div>
      </div>
    </>
  );
};

export default QRPage;
