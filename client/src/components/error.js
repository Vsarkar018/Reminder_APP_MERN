import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section">
      <div className="alert">
        <h1>Opps!! it's a dead end</h1>
        <Link to="/login" className="btn btn-block">
          Login Here
        </Link>
      </div>
    </section>
  );
};
export default Error;
