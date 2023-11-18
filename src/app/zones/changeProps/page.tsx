"use client";

import { useMemo, useState } from "react";

import { logRender } from "@/lib/log";
import Zone from "@/lib/zones/components/Zone/Zone";
import UseRefZone from "@/lib/zones/components/Zone/UseRefZone";

import { Text } from "@/components/Text/Text";
import { Button } from "@/components/Button/Button";
import { ContextValueViewer } from "@/lib/zones/context/ContextValueViewer/ContextValueViewer";
import { MemoContextValueViewer } from "@/lib/zones/context/ContextValueViewer/MemoContextValueViewer";
import { MemoText } from "@/components/Text/MemoText";

import styles from "./page.module.css";

// На это странице я проверял как себя ведут компоненты при ререндере родителя
// Родительский компонент ререндерится за счет изменения состояния
export default () => {
  logRender("/zone/changeProps");

  const [x, setX] = useState(0);

  // const UseMemoViewer = useMemo(() => <ContextValueViewer />, []);

  return (
    <div className={styles.root}>
      <Button onClick={() => setX(x + 1)}>Добавить</Button>

      <UseRefZone n={x}>
        <MemoContextValueViewer />
        <ContextValueViewer />
      </UseRefZone>
    </div>
  );
};
