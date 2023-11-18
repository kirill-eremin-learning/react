import { logRender } from "@/lib/log";
import { ButtonHTMLAttributes, FC } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = (props) => {
  logRender("Button");

  return <button {...props} />;
};
