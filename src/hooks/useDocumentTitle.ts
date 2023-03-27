import { useRef, useEffect } from "react";
import configuration from "../config/configuration";

export default function useDocumentTitle(
  title?: string,
  prevailOnUnmount: boolean = false
): void {
  const defaultTitle = useRef<string>(document.title);

  useEffect(() => {
    title
      ? (document.title = `${title} | ${configuration().app.name}`)
      : (document.title = `${configuration().app.name}`);
  }, [title]);

  useEffect(() => {
    return () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    };
  }, [prevailOnUnmount]);
}
