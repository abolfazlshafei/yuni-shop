import React from "react";
import pic from "../../assets/img/04-7.jpg";
import "./home.css";
import po from "../../assets/img/Box/new1-1.png";
import fo from "../../assets/img/Box/new2.png";
import zo from "../../assets/img/Box/new3.png";
import doid from "../../assets/img/Box/new4.png";
import { Link } from "react-router-dom";
import ProductMol from "../molecule/Product.Mol";
import zoe from "../../assets/img/Box/new5.png";
import zoef from "../../assets/img/Box/new6.png";
import zor from "../../assets/img/Box/new7.png";
import zod from "../../assets/img/Box/new9.png";
import zorf from "../../assets/img/Box/new8.png";
import BoxMol from "../molecule/Box.Mol";
import MoreMol from "../molecule/More.Mol";
import BigMol from "../molecule/Big.Mol";
import LastMol from "../molecule/Last.Mol";
import Imageslider from "../../Imageslider";
function Home() {
  return (
    <div className="slide">
      <div className="link">
        <img src={pic} alt="" className="link-pic" />
        <div><Imageslider></Imageslider></div>
        <div className="link-2">
          <div className="link-down">
            <ul className="link-down2">
              <li className="">
                {" "}
                <Link className="link-down2" to="/clothes">
                  <img src={po} alt="" className="size-16" />
                </Link>
              </li>
              <li className="link-down2">
                {" "}
                <Link>
                  <img src={fo} alt="" className="size-16" />
                </Link>
              </li>
              <li className="link-down2">
                {" "}
                <Link>
                  {" "}
                  <img src={zo} alt="" className="size-16" />
                </Link>
              </li>
              <li>
                <Link>
                  {" "}
                  <img src={doid} alt="" className="size-16" />
                </Link>
              </li>
              <li>
                {" "}
                <Link>
                  {" "}
                  <img src={zoe} alt="" className="size-16" />
                </Link>
              </li>
              <li>
                <Link>
                  {" "}
                  <img src={zoef} alt="" className="size-16" />
                </Link>
              </li>

              <li>
                <Link>
                  {" "}
                  <img src={zor} alt="" className="size-16" />
                </Link>
              </li>

              <li>
                <Link>
                  {" "}
                  <img src={zorf} alt="" className="size-16" />
                </Link>
              </li>
              <li>
                <Link>
                  {" "}
                  <img src={zod} alt="" className="size-16" />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <BoxMol />
          </div>
          <div>
            <h4 className="new ">محصولات جدید</h4>
          </div>
          <div className="">
            <ProductMol />
          </div>
          <div>
           <MoreMol/>
          </div>

          <div>
            <BigMol/>
          </div>

          <div>
            <LastMol/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
