import React from "react";
import Header from "../organize/Header";
import Footer from "../organize/Footer";
function Layout({children}) {
  return (
    <div className="bg-[#eee]">
      <div className=" flex w-[full] flex-col h-full gap-10 justify-center items-center">
        <Header />
        {children}
        <Footer/>
      </div>
    
    </div>
  );
}

export default Layout;
