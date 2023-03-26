import html2canvas from "html2canvas";
import { RefObject } from "react";

export default async function downloadImageService(
  ref: RefObject<HTMLDivElement>
) {
  if (ref.current) {
    try {
      const target = await html2canvas(ref.current);
      const link = await document.createElement("a");
      link.download = "card.png";
      link.href = (await target).toDataURL("image/png");
      await link.click();
    } catch (error) {
      alert(error);
    }
  }
}
