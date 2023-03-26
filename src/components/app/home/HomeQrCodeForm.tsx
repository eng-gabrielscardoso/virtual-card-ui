import { ChangeEvent, FormEvent, useState } from "react";

interface IProps {
  onSubmit: (
    userName: string,
    userLinkedin: string,
    userGithub: string
  ) => void;
}

export default function HomeQrCodeForm({ onSubmit }: IProps): JSX.Element {
  const [userName, setUserName] = useState("");
  const [userLinkedin, setUserLinkedin] = useState("");
  const [userGithub, setUserGithub] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    onSubmit(userName, userLinkedin, userGithub);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <label
        htmlFor="userName"
        className="w-full inline-flex whitespace-nowrap items-center"
      >
        <span className="px-2 py-1 rounded-l-xl font-semibold text-gray-700 bg-gray-300 border border-gray-300">
          Name:
        </span>
        <input
          type="text"
          name="userName"
          placeholder="John Titor"
          className="w-full px-2 py-1 border border-gray-300 rounded-r-xl"
          value={userName}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setUserName(event.target.value)
          }
          required
        />
      </label>
      <label
        htmlFor="userLinkedin"
        className="w-full inline-flex whitespace-nowrap items-center"
      >
        <span className="px-2 py-1 rounded-l-xl font-semibold text-gray-700 bg-gray-300 border border-gray-300">
          LinkedIn URL:
        </span>
        <input
          type="text"
          name="userLinkedin"
          placeholder="https://www.linkedin.com/in/john-titor"
          className="w-full px-2 py-1 border border-gray-300 rounded-r-xl"
          value={userLinkedin}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setUserLinkedin(event.target.value)
          }
          required
        />
      </label>
      <label
        htmlFor="userGithub"
        className="w-full inline-flex whitespace-nowrap items-center"
      >
        <span className="px-2 py-1 rounded-l-xl font-semibold text-gray-700 bg-gray-300 border border-gray-300">
          Github URL:
        </span>
        <input
          type="text"
          name="userGithub"
          placeholder="https://www.github.com/john-titor"
          className="w-full px-2 py-1 border border-gray-300 rounded-r-xl"
          value={userGithub}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setUserGithub(event.target.value)
          }
          required
        />
      </label>
      <input
        type="submit"
        value="Generate Card"
        className="text-gray-700 bg-gray-300 font-bold py-2 w-1/2 rounded-xl mx-auto"
      />
    </form>
  );
}
