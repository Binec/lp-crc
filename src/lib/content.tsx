import { createContext, useContext, type ReactNode } from "react";
import homeJson from "../../content/home.json";

type Home = typeof homeJson;

const HomeContext = createContext<Home>(homeJson);
export const useHome = () => useContext(HomeContext);

export function ContentProvider({ children }: { children: ReactNode }) {
  return <HomeContext.Provider value={homeJson}>{children}</HomeContext.Provider>;
}