import React from "react";
import { useNavigate } from "react-router-dom";

function MoltiObjectAtom({  icon,
    icon2,
    img,
    title,
    inventory,
    name,
    icon3,
    url,}) {
  const navigate = useNavigate();
  const handleClick3 = () => {
    navigate(url);
  };
  return <div onClick={handleClick3}>



  </div>;
}

export default MoltiObjectAtom;
