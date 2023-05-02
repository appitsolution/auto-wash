import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const QRPage = () => {
  const [qrData, setQrData] = useState("");

  const handleError = (error) => {
    console.error(error);
  };

  const handleScan = (data) => {
    if (data) {
      console.log(data);
      setQrData(data);
    }
  };
  return (
    <>
      <QrReader
        facingMode="environment"
        delay={300}
        onResult={handleScan}
        style={{ width: "100%" }}
      />
    </>
  );
};

export default QRPage;
