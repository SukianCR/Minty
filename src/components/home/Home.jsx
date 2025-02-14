import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="d-grid gap-3 text-center pt-5 px-4 mb-5 ">
      <h3 className="text-light">
        <span className="text-primary shadow-green">Minty</span> is Susana's web
        developer demo{" "}
      </h3>

      <div className="p-2 text-secondary ">Which includes :</div>

      <div className="p-2     mb-2  ">
        <ul className="home  p-0 ">
          <li className="border border-secondary text-light rounded ">
            {" "}
            <i className="bi bi-feather  text-secondary pr-05 "></i> Design your
            own garden with js library dnd kit for drag and drop.
          </li>
          <li className="border border-primary text-light rounded ">
            {" "}
            <i className="bi bi-feather pr-05 text-primary rounded"></i> Filter
            artists with the costarican artists directory . Using register,
            login and jswebtoken for authenticating.{" "}
          </li>
          <li className="border border-warning text-light rounded">
            {" "}
            <i className="bi bi-feather pr-05 text-warning"></i> Main projects
            on my FullStack Academy web developer bootcamp{" "}
          </li>
          <li className="border border-info text-light rounded ">
            {" "}
            <i className="bi bi-feather pr-05 text-info "></i>About Me/ Resume /
            Contact
          </li>
        </ul>
      </div>

      <div className="p-2 text-info ">
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
