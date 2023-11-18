import { logRender } from "@/lib/log";
import { FC } from "react";

export interface TextProps {
  text: string;
}

export const Text: FC<TextProps> = ({ text }) => {
  logRender(`Text (content: ${text})`);

  return <div>{text}</div>;
};
