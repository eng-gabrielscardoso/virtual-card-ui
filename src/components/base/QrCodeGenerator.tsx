import { useEffect, useRef } from "react";
import QRCode from "qrcode";

interface IProps {
  text: string;
}

export default function QRCodeGenerator({ text }: IProps) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, text, (error) => {
        if (error) console.error(error);
      });
    }
  }, [text]);

  return <canvas ref={canvasRef} />;
}
