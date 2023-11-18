"use client";

import { logRender } from "@/lib/log";

import Zone from "@/lib/zones/components/Zone/Zone";
import { Counter } from "@/components/Counter/Counter";

import styles from "./page.module.css";

// На это странице я проверял как себя ведут компоненты при ререндере родителя
// Родительский компонент ререндерится за счет изменения состояния
export default () => {
  logRender("/zone/childRerender");
  return (
    <div className={styles.root}>
      <Zone n={1}>
        <Counter />
      </Zone>
    </div>
  );
};
