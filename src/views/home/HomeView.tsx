import { useEffect, useState } from "react";

import HomeCardPreview from "../../components/app/home/HomeCardPreview";
import HomeQrCodeForm from "../../components/app/home/HomeQrCodeForm";
import BaseCard from "../../components/base/BaseCard";

import ProfilesService from "../../services/profiles/ProfilesServices";

interface IProps {}

export default function HomeView({}: IProps): JSX.Element {
  const [userName, setUserName] = useState("");
  const [userLinkedin, setUserLinkedin] = useState("");
  const [userGithub, setUserGithub] = useState("");
  const [error, setError] = useState(null);

  function handleSubmit(
    userName: string,
    userLinkedin: string,
    userGithub: string
  ): void {
    ProfilesService.storeProfile({
      name: userName,
      linkedin: userLinkedin,
      github: userGithub,
    })
      .then((response) => {
        setUserName(userName);
        setUserLinkedin(userLinkedin);
        setUserGithub(userGithub);
      })
      .catch((error) => {
        setError(error);
        throw error;
      });
  }

  useEffect(() => {
    if (userName && userLinkedin && userGithub) {
    }
  }, [userName, userLinkedin, userGithub]);

  return (
    <div className="w-full md:w-1/2">
      <BaseCard title="Virtual Card">
        <HomeQrCodeForm onSubmit={handleSubmit} />
        {userName && userGithub && userLinkedin && (
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
