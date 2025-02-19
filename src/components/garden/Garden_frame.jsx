import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function Garden_frame() {
  const navigate = useNavigate();

  return (
    <div className="d-grid gap-3 text-center pt-5 px-4 mb-5 ">
      <div className="p-2 mb-2">
        <ul className="garden_frame p-0">
          <li className="border border-secondary text-light rounded ">
            Garden Info
          </li>
          <li className="border border-primary text-light rounded ">Canvas</li>
          <li className="border border-warning text-light rounded">
            Plant filter form and plant list
          </li>
        </ul>
      </div>
    </div>
  );
}
