import { MutableRefObject, createContext } from "react";

export interface ZoneContextValue {
  n: number;
}

type MutableRefZoneContextValue = MutableRefObject<ZoneContextValue>;

export const ZoneContext = createContext<
  ZoneContextValue | MutableRefZoneContextValue
>({ n: 1 });
