import React, { FC, PropsWithChildren } from "react";

import { logRender } from "@/lib/log";

import { ZoneContext } from "../../context";

export interface ZoneProps extends PropsWithChildren {
  n: number;
}

const Zone: FC<ZoneProps> = ({ n, children }: ZoneProps) => {
  logRender("Zone");

  const context = {
    n,
  };

  return (
    <ZoneContext.Provider value={context}>{children}</ZoneContext.Provider>
  );
};

export default Zone;
