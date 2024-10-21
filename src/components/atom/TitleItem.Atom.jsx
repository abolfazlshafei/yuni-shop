import React from "react";
import "./title.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function TitleItemAtom({ img, name, sport, title, url, link }) {
  const navigate = useNavigate();
  const handleClick4 = () => {
    navigate(url);
  };
  return (
    <div onClick={handleClick4} className="newspaper">
      <div className="news-box">
        <div className="boi">
          <h3>{img}</h3>
          <span>
            <h3 className="text-[14px]">{name}</h3>
            <h4 className="text-[14px]">{sport}</h4>
          </span>
        </div>

        <div className="titles">
          <p className="text-[11px]">{title}</p>
          <Link className="text-[11px] text-blue-600">{link}</Link>
        </div>
      </div>
    </div>
  );
}

export default TitleItemAtom;
