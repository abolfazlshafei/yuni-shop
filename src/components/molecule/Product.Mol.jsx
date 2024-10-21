import React from "react";
import { routes } from "../../Config";
import CardItemAtom from "../atom/CardItem.Atom";
import "./product.css";
function ProductMol() {
  return (
    <div className="detail ">
      {routes.map((i) => (
        <CardItemAtom {...i} />
      ))}
    </div>
  );
}

export default ProductMol;
