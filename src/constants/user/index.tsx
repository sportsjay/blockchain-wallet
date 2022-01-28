import { Action, createAction } from "@reduxjs/toolkit";
import { Transaction } from "../../screens/home/components/transaction";

export enum userConstants {
  signIn = "sign-in",
  signOut = "sign-out",
}

export interface userState {
  publicKey: string | null;
  privateKey: string | null;
  isSigned: boolean;
  balance?: string;
}

export interface UserAction extends Action<string> {
  payload?: userState;
}
