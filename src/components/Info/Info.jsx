import { useEffect, useRef, useState } from "react";
import { BrowserQRCodeReader } from "@zxing/library";

const Info = () => {
  const videoRef = useRef(null);
  const [data, setData] = useState("");
  const intervalIdRef = useRef(null);

  useEffect(() => {
    // Проверяем, поддерживает ли браузер API getUserMedia
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.log("getUserMedia не поддерживается");
      return;
    }

    // Получаем доступ к камере устройства
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        // Устанавливаем видеопоток в качестве источника для элемента видео
        const video = videoRef.current;
        video.srcObject = stream;
        video.setAttribute("playsinline", true);
        video.play();

        // Создаем экземпляр объекта для чтения QR-кодов
        const codeReader = new BrowserQRCodeReader();

        // Слушаем событие о появлении новых кадров в видеопотоке
        video.addEventListener("loadeddata", () => {
          // Запускаем интервал чтения QR-кода
          intervalIdRef.current = setInterval(() => {
            // Читаем QR-код из видеопотока
            codeReader.decodeFromVideoDevice(null, video, (result) => {
              console.dir(result);
              // Если получили результат, выводим его и останавливаем интервал
              if (result !== undefined) {
                setData(result.text);
                clearInterval(intervalIdRef.current);
              }
            });
          }, 5000);
        });
      })
      .catch((error) => {
        console.log("Ошибка получения доступа к видеокамере:", error);
      });
  }, []);

  return (
    <section className="info">
      <div className="container">
        <video
          className="info__test"
          ref={videoRef}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
        ></video>
        <div className="video"></div>
      </div>
    </section>
  );
};

export default Info;
