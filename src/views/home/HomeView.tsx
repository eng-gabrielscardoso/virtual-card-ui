import { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";

import HomeCardPreview from "../../components/app/home/HomeCardPreview";
import HomeQrCodeForm from "../../components/app/home/HomeQrCodeForm";
import BaseCard from "../../components/base/BaseCard";

interface IProps {}

export default function HomeView({}: IProps): JSX.Element {
  useDocumentTitle();

  const [userName, setUserName] = useState("");
  const [userLinkedin, setUserLinkedin] = useState("");
  const [userGithub, setUserGithub] = useState("");

  function handleSubmit(
    userName: string,
    userLinkedin: string,
    userGithub: string
  ): void {
    setUserName(userName);
    setUserLinkedin(userLinkedin);
    setUserGithub(userGithub);
  }
  return (
    <div className="w-full md:w-1/2">
      <BaseCard title="Virtual Card">
        <HomeQrCodeForm onSubmit={handleSubmit} />
        {userName && userLinkedin && userGithub && (
          <HomeCardPreview
            userName={userName}
            userLinkedin={userLinkedin}
            userGithub={userGithub}
          />
        )}
      </BaseCard>
    </div>
  );
}
