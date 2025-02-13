import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function FSWA() {
  const navigate = useNavigate();

  return (
    <div className="d-grid gap-3 text-center pt-5 px-5 ">
      
        <h2>FullStack Academy </h2>
     
      <div className="p-2 bg-light border">
        {" "}
        Web Developer Bootcamp 2024 <a href="#">main projects</a>
      </div>
      <div className="p-2 bg-light border">
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
      </div>
    </div>
  );
}
