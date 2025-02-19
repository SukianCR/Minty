import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Nav_Bar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-primary px-4 w100"
      data-bs-theme="dark"
    >
      <div className="container-fluid w100">
        <NavLink to="/" className="navbar-brand text-black  ">
          <span className="shadow-yellow display-6"> Minty </span>

          <i className="bi bi-feather  fw-bold shadow-yellow"></i>

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
          <ul className="navbar-nav me-auto ">
            <li className="pink my-2 text-danger mx-1   ">.</li>
            <li className="nav-item ">
              <NavLink to="/garden" className="nav-link text-dark lead  ">
                Garden Studio 1
              </NavLink>
            </li>
            <li className="pink my-2 text-danger mx-1   ">.</li>

            <li className="nav-item  ">
              <NavLink to="/artists" className="nav-link text-dark lead ">
                CR Artists
              </NavLink>
            </li>
            <li className="pink my-2 text-danger mx-1   ">.</li>
            <li className="nav-item ">
              <NavLink to="/fswa" className="nav-link text-dark lead ">
                FullStack Academy
              </NavLink>
            </li>
            <li className="pink my-2 text-danger mx-1   ">.</li>
            <li className="nav-item dropdown ">
              <NavLink
                to="/resume"
                className="nav-link dropdown-toggle text-dark lead "
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Susana
              </NavLink>

              <div className="dropdown-menu mb-3  border border-warning ">
                <NavLink
                  to="/about"
                  className="nav-link border-bottom border-warning text-center  "
                >
                  <small className=" lead text-light"> About</small>
                </NavLink>
                <NavLink
                  to="/resume"
                  className="nav-link text-center border-bottom border-warning "
                >
                  <small className=" lead text-light"> Resume</small>
                </NavLink>
                <NavLink to="/contact" className="nav-link text-center">
                  <small className=" lead text-light"> Contact</small>
                </NavLink>
              </div>
            </li>
            <li className="pink my-2 text-danger mx-1   ">.</li>
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
