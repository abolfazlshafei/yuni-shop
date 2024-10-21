import React from "react";
import logo from "../../assets/logo/logo-tr.png";
import { MdCall } from "react-icons/md";
import { MdPersonalInjury } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { BiMenu } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./header.css";
import { useState } from "react";

function Header() {
  const [hambuer, setHambuer] = useState(false);

  const toggleHamburger = () => {
    setHambuer(!hambuer);
  };
  return (
    <div className="section-1 rounded-lg ">
      <div className=" bg-black rounded-xl">
        <img src={logo} alt="" className="logo" />
        <div className="top-right2">
          {" "}
          <Link className="p-2 flex">{<MdCall />}</Link>
          <Link className="p-2" to="/login">
            {<MdPersonalInjury />}
          </Link>
          <Link className="border bg-slate-100   rounded-sm  items-center text-base size-8 flex justify-center">
            {<SlBasket />}
          </Link>
        </div>
      </div>

      <div className="top-left" onClick={toggleHamburger}>
        {<BiMenu />}

        <div className="top-left2 ">
          {" "}
          <form action="#" className="form-search  bg-black">
            <input
              type="search"
              placeholder="جستجو در محصولات"
              className="input focus:outline-none rounded-r-lg"
            />

            <button className="btn hover:bg-red-600 rounded-r-none rounded-l-lg">
              <IoSearch />
            </button>
          </form>
          <div className="top-nav">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

//      <div className="section-2 ">
//        <h3 className="yoni">یونی شاپ</h3>

//        <h6 className="yoni-2">
//         سوالی دارید؟تماس بگیرید < className="span">09102684557<///span>{" "}
//       </h6>
//     </div>



//<div className="personal">
//<Link className="flex justify-center p-2 items-center">
//  {<MdPersonalInjury />}
//</Link>
//</div>

//<div className="top-nav2">
//<Link className="hover:text-blue-700"> حساب کاربری</Link>
//<p className="text-[10px]">لطفا وارد حساب خود شوید </p>
//</div>
