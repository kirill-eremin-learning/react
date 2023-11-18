import React, { FC, PropsWithChildren, useRef } from "react";

import { logRender } from "@/lib/log";

import { ZoneContext } from "../../context";

export interface ZoneProps extends PropsWithChildren {
  n: number;
}

const Zone: FC<ZoneProps> = ({ n, children }: ZoneProps) => {
  logRender("UseRefZone");

  const context = useRef({
    n,
  });

    context.current = { n };

  return (
    <ZoneContext.Provider value={context}>{children}</ZoneContext.Provider>
  );
};

export default Zone;
