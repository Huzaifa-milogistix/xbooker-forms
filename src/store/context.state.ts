import { atom } from "recoil";

export const loadingState = atom<boolean>({
  key: "LoadingState",
  default: true,
});
