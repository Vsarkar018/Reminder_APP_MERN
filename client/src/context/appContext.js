import axios from "axios";
import { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import action, { REGISTER_USER_ERROR, REGISTER_USER_SUCCESS } from "./actions";
const initialState = {
  user: null,
  isLoading: false,
  showAlert: false,
  editComplete:true
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoading = () => {
    dispatch({ type: action.SET_LOADING });
  };
  const register = async (userInput) => {
    setLoading();
    try {
      const { data } = await axios.post(`/auth/register`, {
        ...userInput,
      });
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user.name });

      localStorage.setItem(
        "user",
        JSON.stringify({ name: data.user.name, token: data.token })
      );
    } catch (error) {
      dispatch({ type: action.REGISTER_USER_ERROR });
    }
  };

  const login = async (userInput) => {
    setLoading();
    try {
      const { data } = await axios.post(`/auth/login`, {
        ...userInput,
      });
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user.name });
      localStorage.setItem(
        "user",
        JSON.stringify({ name: data.user.name, token: data.token })
      );
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR });
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: LOGOUT_USER });
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const newUser = JSON.parse(user);
      dispatch({ type: SET_USER, payload: newUser.name });
    }
  }, []);
  return (
    <AppContext.Provider
      value={{ ...sta, setLoading, register, login, logout }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
