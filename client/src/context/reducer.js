import actions, {
  LOGOUT_USER,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  SET_LOADING,
  SET_USER,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === SET_LOADING) {
    return { ...state, isLoading: true, showAlert: false };
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    return { ...state, isLoading: false, user: action.payload };
  }

  if (action.type === REGISTER_USER_ERROR) {
    return { ...state, isLoading: false, user: null, showAlert: true };
  }
  if (action.type === SET_USER) {
    return { ...state, user: action.payload };
  }
  if (action.type === LOGOUT_USER) {
    return { ...state, user: null, showAlert: false };
  }

  throw new Error(`no such action : ${action}`);
};

export default reducer;
