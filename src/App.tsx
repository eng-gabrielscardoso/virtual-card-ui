import { useState } from "react";
import useDocumentTitle from "./hooks/useDocumentTitle";

import AppCardPreview from "./components/app/AppCardPreview";
import AppQrCodeForm from "./components/app/AppQrCodeForm";
import BaseCard from "./components/base/BaseCard";

interface IProps {}

export default function App({}: IProps): JSX.Element {
  useDocumentTitle("Virtual Card | Generate your own business card online");

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
    <div className="h-screen w-screen p-4 grid place-items-center bg-gradient-to-l from-gray-900 via-purple-900 to-violet-600">
      <div className="w-full md:w-1/2">
        <BaseCard title="Virtual Card">
          <AppQrCodeForm onSubmit={handleSubmit} />
          {userName && userLinkedin && userGithub && (
            <AppCardPreview
              userName={userName}
              userLinkedin={userLinkedin}
              userGithub={userGithub}
            />
          )}
        </BaseCard>
      </div>
    </div>
  );
}
