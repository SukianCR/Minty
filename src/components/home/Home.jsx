import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="d-grid gap-3 text-center pt-5 px-4 ">
      <h2>Mintys is Susana's web developer demo </h2>

      <div className="p-2 bg-light border">
        Susana's Web Developer Demo which includes :
      </div>

      <div className="p-2 bg-light  ">
        <ul className="home">
          <li className="border border-secondary ">
            {" "}
            <i className="bi bi-feather  text-secondary pr-05 "></i> Design your
            own garden with js library dnd kit for drag and drop.
          </li>
          <li className="border border-primary ">
            {" "}
            <i className="bi bi-feather pr-05 text-primary"></i> Filter artists
            with the costarican artists directory . Using register, login and
            jswebtoken for authenticating.{" "}
          </li>
          <li className="border border-info ">
            {" "}
            <i className="bi bi-feather pr-05 text-info"></i> Main projects on
            my FullStack Academy web developer bootcamp{" "}
          </li>
          <li className="border border-warning ">
            {" "}
            <i className="bi bi-feather pr-05 text-warning "></i>About Me/
            Resume / Contact
          </li>
        </ul>
      </div>

      <div className="p-2 bg-light border ">
        Technologies used: PERN Postgress , Express , React and Node
      </div>
    </div>
  );
}
