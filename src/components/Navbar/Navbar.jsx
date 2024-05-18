import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.css";
import { unmountLogin } from "../store/slice/login-slice.js";
const Navbar = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  let checkIcon = null;
  if (user) {
    checkIcon = user.token;
  }
  function handleLogout() {
    dispatch(unmountLogin());
    localStorage.removeItem("user");
  }
  return (
    <section>
      <nav className="navbar navbar-expand-lg sticky-top ">
        <div className="container">
          <i className="fa-solid fa-stethoscope icon pe-4"></i>
          <h3 className="first-text">MediTech</h3>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main"
            aria-controls="main"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center text-center  "
            id="main"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link
                  className="nav-link p-lg-3 active text-decoration-underline"
                  aria-current="page"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link p-lg-3"
                  to={checkIcon ? "/schedule" : "/login"}
                >
                  Schedule
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link p-lg-3" to={"/login"}>
                  login
                </Link>
              </li>
            </ul>
          </div>
          {checkIcon && (
            <div className="nav-icon">
              <Link to={"/profile"}>
                <i className="fa-regular fa-user pe-2"></i>
              </Link>
              <Link to={"/"} onClick={handleLogout}>
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
