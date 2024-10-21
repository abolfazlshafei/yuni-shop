import React from "react";
import ice from "../../assets/img/Box/final-01.png"
import "./box.css";
import LiveItemAtom from "../atom/liveItem.Atom";
import {sells} from '\../../Config3'
function BoxMol() {
  return (
    <div className="buy ">
      <div className="buy-title">
        <div className="buy-pic">
          <img src={ice} alt="" className="size-16 "/>
        </div>

        <div className="slider-1">

        {sells.map((i)=>(
            <LiveItemAtom {...i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BoxMol;
