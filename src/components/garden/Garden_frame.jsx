import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function Garden_frame() {
  const navigate = useNavigate();

  return (
    <div className=" text-center my-1">
      <div className="py-5">
        <ul className="garden_frame p-0">
          <li className="border border-secondary text-secondary rounded p-4 lead   ">
            Garden Info
          </li>
          <li className="border border-primary text-primary rounded p-4 lead  ">
            Canvas
          </li>
          <li className="border border-warning text-warning rounded p-4 lead ">
            Plant filter form and plant list
          </li>
        </ul>
      </div>
    </div>
  );
}
