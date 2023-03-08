import React from "react";
import { Route, redirect } from "react-router-dom";
import { useGlobalContext } from "../context/appContext";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useGlobalContext();

  return (
    <Route
      {...rest}
      render={() => {
        return user ? children : redirect("/");
      }}
    ></Route>
  );
};

export default PrivateRoute;
