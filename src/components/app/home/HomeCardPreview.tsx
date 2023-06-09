import { RefObject, useRef } from "react";
import useDownloadImage from "../../../hooks/useDownloadImage";

import HomeQrCodeCanvas from "./HomeQrCodeCanvas";
import BaseCard from "../../base/BaseCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface IProps {
  userName: string;
  userLinkedin: string;
  userGithub: string;
}

function urlfy(url: string): string {
  return url.replace(/\s/g, "%20");
}

export default function HomeCardPreview({
  userName,
  userLinkedin,
  userGithub,
}: IProps): JSX.Element {
  const greetings: string = `Hello, my name is ${userName}!`;
  const userBusinessCardLink: string = `${
    document.location.href
  }profiles/${urlfy(userName)}`;
  // temp for show in web the result of qrcode
  console.log(userBusinessCardLink);

  const userCard: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const [downloadLink, handleDownloadImage] = useDownloadImage(userCard);

  return (
    <div className="flex flex-col gap-2">
      <div ref={userCard}>
        <BaseCard title={greetings} theme="accent">
          <div className="flex flex-col sm:flex-row gap-2 items-center justify-between">
            <div className="flex flex-col gap-1">
              <span>You can connect with me via LinkedIn or Github.</span>
              <span className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faLinkedin} />
                <a
                  href={userLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:cursor-pointer hover:underline"
                >
                  {userLinkedin}
                </a>
              </span>
              <span className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faGithub} />
                <a
                  href={userGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:cursor-pointer hover:underline"
                >
                  {userGithub}
                </a>
              </span>
            </div>
            <HomeQrCodeCanvas target={userBusinessCardLink} />
          </div>
        </BaseCard>
      </div>
      <button
        onClick={handleDownloadImage}
        className="text-gray-700 bg-gray-300 font-bold py-2 w-1/2 mx-auto rounded-xl"
      >
        <span className="flex gap-2 items-center justify-center">
          <FontAwesomeIcon icon={faFloppyDisk} />
          Download image
        </span>
        {downloadLink && <a href={downloadLink} download="card.png" />}
      </button>
    </div>
  );
}
