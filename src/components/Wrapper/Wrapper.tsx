import { FC, PropsWithChildren } from "react";

import { logRender } from "@/lib/log";

import styles from "./Wrapper.module.css";

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  logRender("Wrapper");

  return <div className={styles.root}>{children}</div>;
};
