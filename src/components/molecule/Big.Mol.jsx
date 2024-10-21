import React from "react";
import { details } from "../../Config4";
import "./big.css";
import TitleItemAtom from "../atom/TitleItem.Atom";
function BigMol() {
  return (
    <div className="big">
      <div className="big-1">
        <h3>نظرات مشتریان و بزرگان رزمی ایران</h3>
      </div>
      <hr />
      <div className="big-title">
        {details.map((i) => (
          <TitleItemAtom {...i} />
        ))}
      </div>
    </div>
  );
}

export default BigMol;
