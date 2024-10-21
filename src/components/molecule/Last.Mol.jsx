import React from "react";
import "./last.css";
import LastItemAtom from "../atom/LastItem.Atom";
import { lasts } from "../../Config5";
function LastMol() {
  return (
    <div className="last">
      <h3 className="last-title">آخرین مقالات کیسه بوکس</h3>
      <hr />
      <div className="last-btn">
        {lasts.map((i) => (
          <LastItemAtom {...i} />
        ))}
      </div>
    </div>
  );
}

export default LastMol;
