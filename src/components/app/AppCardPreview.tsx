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

  return (
    <BaseCard title={greetings} theme="accent">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span>You can connect with me via LinkedIn or Github.</span>
          <span><b>Linkedin:</b> {userLinkedin}</span>
          <span><b>Github:</b> {userGithub}</span>
        </div>
        <AppQrCodeCanvas text="Teste" />
      </div>
    </BaseCard>
  );
}
