import { ReactNode } from "react";

interface IProps {
  title: string;
  theme?: "white" | "dark" | "accent" | "primary" | "secondary";
  children: ReactNode | JSX.Element | JSX.Element[];
}

const themes = {
  white: "bg-white text-black",
  dark: "bg-black text-white",
  accent:
    "bg-gradient-to-l from-gray-900 via-purple-900 to-violet-600 text-white",
  primary: "bg-blue-600 text-white",
  secondary: "bg-gray-200 text-gray-700",
};

export default function BaseCard({
  title,
  theme = "white",
  children,
}: IProps): JSX.Element {
  return (
    <div className={`${themes[theme]} p-4 rounded-xl border`}>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl md:text-3xl font-bold">{title}</h2>
        <hr />
        <div className="flex flex-col gap-4">{children}</div>
      </div>
    </div>
  );
}
