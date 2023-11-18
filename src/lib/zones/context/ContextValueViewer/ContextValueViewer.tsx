import { FC, useContext } from "react";

import { Text } from "@/components/Text/Text";

import { ZoneContext } from "..";
import { logRender } from "@/lib/log";

export const ContextValueViewer: FC = () => {
  logRender("ContextValueViewer");
  const contextValue = useContext(ZoneContext);

  return <Text text={JSON.stringify(contextValue)} />;
};
