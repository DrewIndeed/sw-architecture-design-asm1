import store from "store2";

const keyName = "currentUser";

export function localGet() {
  const rawValue = store.get(keyName);
  if (rawValue !== undefined) {
    return JSON.parse(rawValue);
  }
  return undefined;
}

export function localSet(value) {
  return store.set(keyName, JSON.stringify(value));
}

export function localClear() {
  return store.remove(keyName);
}
