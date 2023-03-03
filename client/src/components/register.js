import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const url = "http://localhost:5000/api/v1/auth/register";

const Register = () => {
  const { registerData, setUser, user } = useGlobalContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerData(url);
  };

  return (
    <section>
      <h2 className="text-center">Register here</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="fname" className="form-label">
            First Name
          </label>
          <input
            className="form-input"
            type="text"
            id="fname"
            name="fname"
            onChange={(e) => {
              setUser({ ...user, firstName: e.target.value });
            }}
          />
        </div>
        <div className="form-row">
          <label htmlFor="lname" className="form-label">
            Last Name
          </label>
          <input
            className="form-input"
            type="text"
            id="lname"
            name="lname"
            onChange={(e) => {
              setUser({ ...user, lastName: e.target.value });
            }}
          />
        </div>
        <div className="form-row">
          <label htmlFor="date" className="form-label">
            Date of Birth
          </label>
          <input
            className="form-input"
            type="Date"
            id="date"
            name="date"
            onChange={(e) => {
              setUser({ ...user, DOB: e.target.value });
            }}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
        </div>

        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            className="form-input"
            type="password"
            id="password"
            name="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Register
        </button>
        <p>
          Already have an account ? <Link to="/">Login Here</Link>
        </p>
      </form>
    </section>
  );
};
export default Register;
