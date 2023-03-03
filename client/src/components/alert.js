import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
const Alert = ({ para }) => {
  const { showAlert, alert } = useGlobalContext();
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [para]);
  return <p className={`alert alert-${alert.type}`}>{alert.msg}</p>;
};
export default Alert;
