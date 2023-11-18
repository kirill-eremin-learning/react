"use client";

import { useState } from "react";

import { Button } from "@/components/Button/Button";
import { Text } from "@/components/Text/Text";

import styles from "./page.module.css";
import { logRender } from "@/lib/log";
import Zone from "@/lib/zones/components/Zone/Zone";
import { Wrapper } from "@/components/Wrapper/Wrapper";

// На это странице я проверял как себя ведут компоненты при ререндере родителя
// Родительский компонент ререндерится за счет изменения состояния
export default () => {
  logRender("/zones");
  const [n, setN] = useState(0);

  const onButtonClick = () => setN(n + 1);

  return (
    <div className={styles.root}>
      <Button onClick={onButtonClick}>Добавить</Button>
      <Text text={String(n)} />

      <Wrapper>
        <Text text="Text inside wrapper" />
      </Wrapper>

      <Zone n={2}>
        <Text text="Hello, world!" />
      </Zone>
    </div>
  );
};
