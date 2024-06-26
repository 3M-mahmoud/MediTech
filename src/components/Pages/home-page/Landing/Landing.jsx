import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  return (
    <div className="landing d-flex justify-content-center align-items-center">
      <div className="text-center text-white ">
        <h1 className="pt-5">
          Clinical Precision,
          <br /> Simplified
        </h1>
        <p className=" pt-4 pb-2">
          Your Diagnostic Partner in
          <br /> Healthcare
        </p>
        <form action="login.html">
          <Link to={"/login"} className="btn-login  main-btn btn-lg border-0  ">
            Get Started
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Landing;
