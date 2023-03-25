import QRCodeGenerator from "./components/base/QrCodeGenerator";

interface IProps {}

export default function App(props: IProps) {
  const example: string = "My example"

  return (
    <div className="h-screen w-screen grid place-items-center">
      <div className="text-center">
        <h1>{ example }</h1>
        <QRCodeGenerator text={example} />
      </div>
    </div>
  );
}
