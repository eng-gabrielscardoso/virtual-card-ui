import { useEffect, useRef } from "react";
import QRCode from "qrcode";

interface IProps {
  target: string;
}

export default function HomeQrCodeCanvas({ target }: IProps): JSX.Element {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, target, (error) => {
        if (error) throw error;
      });
    }
  }, [target]);

  return <canvas ref={canvasRef} />;
}
