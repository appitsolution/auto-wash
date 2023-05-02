import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import scan from "../assets/icons/scan.svg";

const QRPage = () => {
  const [qrData, setQrData] = useState("");

  const handleError = (error) => {
    console.error(error);
  };

  const handleScan = (data) => {
    if (data) {
      console.log(data);
      setQrData(data.text);
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
