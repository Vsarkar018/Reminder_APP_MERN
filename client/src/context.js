import axios from "axios";
import { useContext, useState } from "react";
import React from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    DOB: Date,
  });
  const [data, setData] = useState({});
  //Login Account
  const loginData = async (url) => {
    try {
      const { email, password } = user;
      await axios.post(url, { email, password }).then(({ data, status }) => {
        console.log(data);
        console.log(200);
        if (status === 200) {
          setData(data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Register Account
  const registerData = async (url) => {
    try {
      console.log(user);
      await axios
        .post(url, {
          ...user,
        })
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <AppContext.Provider
      value={{
        setUser,
        registerData,
        loginData,
        user,
        data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
