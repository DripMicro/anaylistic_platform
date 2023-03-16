import React, { PropsWithChildren } from "react";

// components

import AffiliatesNavbar from "../components/common/navbars/AffiliatesNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
// import HeaderStats from "components/Headers/HeaderStats.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";

const AffiliatesLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <AffiliatesNavbar/>
      <Sidebar />
      {/* <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24"> */}
          {children}
          {/* <FooterAdmin />
        </div>
      </div> */}
    </>
  );
}

export default AffiliatesLayout;
