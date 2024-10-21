import React from "react";
import { useNavigate } from "react-router-dom";

function LiveItemAtom({ img, title, number, url }) {
  const navigate = useNavigate();
  const handleClick3 = () => {
    navigate(url);
  };
  return (
    <div onClick={handleClick3} className="text-center mt-8">
      <h3 className="size-16">{img}</h3>
      <h6>{title}</h6>
      <p>{number}</p>
    </div>
  );
}

export default LiveItemAtom;
