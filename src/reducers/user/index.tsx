import { UserAction, userConstants, userState } from "../../constants/user";

/**
 * Initial State
 */
const initialUserState: userState = {
  publicKey: null,
  privateKey: null,
  isSigned: false,
};

/**
 * User Reducers to mutate user state and keep track of Users to perform transactions within
 * the application if transactions require identity
 * @param state type userState
 * @param action type action<userState>
 * @returns type userState
 */
function userReducer(
  state: userState = initialUserState,
  action: UserAction
): userState {
  switch (action.type) {
    case userConstants.signIn: {
      return { ...state, ...action.payload };
    }
    case userConstants.signOut: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}

export default userReducer;
