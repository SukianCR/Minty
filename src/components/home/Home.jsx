import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className=" text-center my-5">
      <p className="text-secondary display-6 pb-1  ">Minty</p>{" "}
      <figure className="text-center lead px-4">
        <blockquote className="blockquote">
          <p>
            Susana Fernandez's web developer
            <span className="text-warning"> demo </span>
          </p>
        </blockquote>
        <figcaption className="blockquote-footer">
          <small>
            {" "}
            <cite title="Source Title">Detroit, MI</cite> 02/2025
          </small>
        </figcaption>
      </figure>
      <div className="py-3 ">
        <ul className="garden_frame p-0">
          <li className="border border-secondary lead text-secondary rounded p-4 ">
            {" "}
            <NavLink to="/garden" className="nav-link  ">
              <i className="bi bi-feather  text-secondary pr-05 "></i> Design
              your own garden with js library dnd kit for drag and drop.
            </NavLink>{" "}
          </li>

          <li className="border border-primary text-primary rounded p-4 lead  ">
            {" "}
            <NavLink to="/artists" className="nav-link ">
              <i className="bi bi-feather pr-05 text-primary rounded"></i>{" "}
              Filter artists with the costarican artists directory . Using
              register, login and jswebtoken for authenticating.{" "}
            </NavLink>
          </li>
          <li className="border border-warning text-warning rounded p-4 lead ">
            <NavLink to="/fswa" className="nav-link tex ">
              {" "}
              <i className="bi bi-feather pr-05 text-warning"></i> Main projects
              on my FullStack Academy web developer bootcamp{" "}
            </NavLink>
          </li>
          <li className="border border-info text-info rounded p-4 lead  ">
            <NavLink to="/about" className="nav-link  ">
              {" "}
              <i className="bi bi-feather pr-05 text-info "></i>About Me /
              Resume / Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="p-2 text-info lead ">
        <span className="text-warning">Technologies used: </span> PERN Postgress
        , Express , React and Node . CSS flex to make it resizable . Bootswatch
        template{" "}
        <a href="https://bootswatch.com/minty/" target="_blank">
          Minty
        </a>{" "}
        .
      </div>
    </div>
  );
}
