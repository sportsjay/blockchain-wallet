import { UserAction, userConstants, userState } from "../../constants/user";

export function signIn(userState: userState): UserAction {
  return {
    type: userConstants.signIn,
    payload: userState,
  };
}

export function signOut(userState: userState): UserAction {
  return {
    type: userConstants.signOut,
    payload: userState,
  };
}
