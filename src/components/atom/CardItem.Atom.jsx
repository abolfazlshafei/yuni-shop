import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";
import { Link } from "react-router-dom";
function CardItemAtom({
  icon,
  icon2,
  img,
  title,
  inventory,
  name,
  icon3,
  url,
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url);
  };
  return (
    <div className="section-top" onClick={handleClick}>
      <div className="ROW">
        <div className="section-pic">
          {icon}
          <Link className="section-line"> {icon2}</Link>
        </div>
       <Link className="section-img" to="">{img}</Link>

        <div>
          <h3 className="name">{name}</h3>
        </div>
        <div className="section-name">
          <h4 className="mt-1">{icon3}</h4>
          <h3 className="text-[12px]">{title}</h3>
        </div>

        <div className="key">
          <h3 >{inventory}</h3>
        </div>
      </div>
    </div>
  );
}

export default CardItemAtom;
