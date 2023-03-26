import html2canvas from "html2canvas";
import { RefObject, useCallback, useState } from "react";

type UseDownloadImageServiceResponse = {
  downloadLink: string;
  handleDownloadImage: () => Promise<void>;
};

export default function useDownloadImage(
  ref: RefObject<HTMLDivElement>
): UseDownloadImageServiceResponse {
  const [downloadLink, setDownloadLink] = useState<string>("");

  const handleDownloadImage = useCallback(async () => {
    if (ref.current) {
      try {
        const target = await html2canvas(ref.current);
        const link = document.createElement("a");
        link.download = "card.png";
        link.href = (await target).toDataURL("image/png");
        setDownloadLink(link.href);
        link.click();
      } catch (error) {
        alert(error);
      }
    }
  }, [ref]);

  return { downloadLink, handleDownloadImage } as UseDownloadImageServiceResponse;
}
