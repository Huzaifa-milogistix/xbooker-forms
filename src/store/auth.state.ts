import { atom } from "recoil";
import type { IUser, IUserProfile } from "@/types";

export const userState = atom<IUser | null>({
  key: "UserState",
  default: null,
});

export const userProfileState = atom<IUserProfile | null>({
  key: "UserProfileState",
  default: null,
});
