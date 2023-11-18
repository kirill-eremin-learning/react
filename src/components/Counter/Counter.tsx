import { FC, useState } from "react";

import { logRender } from "@/lib/log";

import { Button } from "../Button/Button";
import { Text } from "../Text/Text";

import styles from "./Counter.module.css";

export const Counter: FC = () => {
  logRender("Counter");
  const [i, setI] = useState(0);

  return (
    <div className={styles.root}>
      <Button onClick={() => setI(i + 1)}>Добавить</Button>
      <Text text={String(i)} />
    </div>
  );
};
