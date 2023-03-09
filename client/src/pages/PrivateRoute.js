import { Route } from "react-router-dom";
import React, { Children } from "react";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context/appContext";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useGlobalContext();
  return (
    <Route {...rest}
    render={()=>{
      return user?children:<Navigate to="/"></Navigate>
    }}>

    </Route>
  )
};

export default PrivateRoute;
