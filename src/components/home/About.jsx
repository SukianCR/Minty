import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="text-center pt-5 px-4">
      <h2>About </h2>
      <p>
        Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu leo.
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
      </p>
    </div>
  );
}
