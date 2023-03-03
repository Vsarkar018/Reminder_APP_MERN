import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { Navigate } from "react-router-dom";
const url = "http://localhost:5000/api/v1/auth/login";

const Login = () => {
  const { loginData, setUser,user } = useGlobalContext();

  //Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    loginData(url);
    <Navigate to={"/home"}/>
  };

  return (
    <section>
      <h2 className="text-center">Login here</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            className="form-input"
            value={user.email}
            type="email"
            id="email"
            name="email"
            onChange={(e) => {
              setUser({...user, email: e.target.value });
            }}
          />
        </div>

        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            className="form-input"
            value={user.password}
            type="password"
            id="password"
            name="password"
            onChange={(e) => setUser({ ...user ,password: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-block">
          login
        </button>
        <p>
          Don't have an account ? <Link to="/register">Register Here</Link>
        </p>
      </form>
    </section>
  );
};
export default Login;
