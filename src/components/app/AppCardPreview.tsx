import { RefObject, useRef } from "react";
import downloadImageService from "../../utils/downloadImage";

import BaseCard from "../base/BaseCard";
import AppQrCodeCanvas from "./AppQrCodeCanvas";

interface IProps {
  userName: string;
  userLinkedin: string;
  userGithub: string;
}

export default function AppCardPreview({
  userName,
  userLinkedin,
  userGithub,
}: IProps): JSX.Element {
  const greetings = `Hello, my name is ${userName}!`;

  const userCard: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  async function handleDownload(): Promise<void> {
    await downloadImageService(userCard);
  }

  return (
    <div className="flex flex-col gap-2">
      <div ref={userCard}>
        <BaseCard title={greetings} theme="accent">
          <div className="flex flex-col sm:flex-row gap-2 items-center justify-between">
            <div className="flex flex-col gap-1">
              <span>You can connect with me via LinkedIn or Github.</span>
              <span>
                <b>Linkedin:</b> {userLinkedin}
              </span>
              <span>
                <b>Github:</b> {userGithub}
              </span>
            </div>
            <AppQrCodeCanvas text="Teste" />
          </div>
        </BaseCard>
      </div>
      <button
        onClick={handleDownload}
        className="text-gray-700 bg-gray-300 font-bold py-2 w-1/2 mx-auto rounded-xl"
      >
        Download image
      </button>
    </div>
  );
}
