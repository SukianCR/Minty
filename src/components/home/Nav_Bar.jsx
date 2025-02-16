import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Nav_Bar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-primary px-3 "
      data-bs-theme="dark"
    >
      <div className="container-fluid ">
        <NavLink to="/" className="navbar-brand text-secondary up1 ">
          <span className="twoX shadow-red"> Minty </span>
          <i className="bi bi-feather pr-03 twoX fw-bold shadow-red"></i>
          <span className="text-warning twoX fw-light shadow-yellow">
            Demo
          </span>{" "}
          <span className="visually-hidden">(current)</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink to="/garden" className="nav-link text-light ">
                Garden Studio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/artists" className="nav-link text-light">
                CR Artists
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/fswa" className="nav-link text-light">
                FullStack Academy
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                to="/resume"
                className="nav-link dropdown-toggle text-light"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Susana
              </NavLink>
              <div className="dropdown-menu mb-3 pink up2">
                <NavLink
                  to="/about"
                  className="nav-link border-bottom border-primary text-light "
                >
                  About
                </NavLink>
                <NavLink
                  to="/resume"
                  className="nav-link border-bottom border-primary text-light"
                >
                  Resume
                </NavLink>
                <NavLink to="/contact" className="nav-link text-light ">
                  Contact
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

{
  /* <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <span className="material-symbols-outlined">star</span>

        <NavLink to="/" className="navbar-brand ">
          Minty Demo
        </NavLink>

        <i className="bi bi-balloon-heart"></i>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/garden" className="nav-link ">
                Garden Studio
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/artists" className="nav-link ">
                Artists Directory
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/realestate" className="nav-link ">
                Real Estate
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/fswa" className="nav-link ">
                FSWA assignments
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/resume" className="nav-link ">
                Resume
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link ">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav> */
}
