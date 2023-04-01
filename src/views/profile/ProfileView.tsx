import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BaseCard from "../../components/base/BaseCard";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import ProfilesService from "../../services/profiles/ProfilesServices";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface IProps {}

export default function ProfileView({}: IProps): JSX.Element {
  const { name } = useParams<{ name: string }>();
  useDocumentTitle(name);

  const [profileData, setProfileData] = useState<AxiosResponse>();

  useEffect(() => {
    async function fetchProfile() {
      try {
        const profile = await ProfilesService.showProfile(name);
        setProfileData(profile);
      } catch (error) {
        throw error;
      }
    }
    fetchProfile();
  }, [name]);

  return (
    <BaseCard title={`Hello, my name is ${name}`}>
      {profileData ? (
        <div>
          <p className="text-lg flex gap-2 items-center">
            <b>Name:</b> {profileData.data?.name}
          </p>
          <p className="text-lg flex gap-2 items-center">
            <FontAwesomeIcon icon={faLinkedin} />
            <b>Linkedin Profile:</b>{" "}
            <a
              href={profileData.data?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {profileData.data?.linkedin}
            </a>
          </p>
          <p className="text-lg flex gap-2 items-center">
            <FontAwesomeIcon icon={faGithub} />
            <b>Github Profile:</b>{" "}
            <a
              href={profileData.data?.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {profileData.data?.github}
            </a>
          </p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </BaseCard>
  );
}
