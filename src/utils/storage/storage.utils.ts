import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageKey } from "./storage.types";

export const storageGetItem = async <T = any>(key: StorageKey): Promise<T | null> => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data && JSON.parse(data);
  } catch {
    return null;
  }
};

export const storageSetItem = async <T = any>(key: StorageKey, value: T): Promise<boolean> => {
  try {
    AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
};

export const storageRemoveItem = async (key: StorageKey): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch {}
};

export const storageClear = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch {}
};
