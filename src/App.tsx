import Router from "./routes/Router";

interface IProps {}

export default function App({}: IProps): JSX.Element {
  return (
    <div className="h-screen w-screen p-4 grid place-items-center bg-gradient-to-l from-gray-900 via-purple-900 to-violet-600">
      <Router />
    </div>
  );
}
