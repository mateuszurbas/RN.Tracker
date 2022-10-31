import { createContext, useContext } from "react";
import { RootStore } from "./root-store.model";

const RootStoreContext = createContext<RootStore>({} as RootStore);

export const RootStoreProvider = RootStoreContext.Provider;

export const useStores = () => useContext(RootStoreContext);
