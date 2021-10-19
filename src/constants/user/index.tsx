import { Action, createAction } from "@reduxjs/toolkit";

export enum userConstants {
  signIn = "sign-in",
  signOut = "signOut",
}

export interface userState {
  publicKey: string | null;
  privateKey: string | null;
  isSigned: boolean;
}

export interface UserAction extends Action<string> {
  payload?: userState;
}
