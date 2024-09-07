import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

// 63AB45
const Root = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto min-h-screen flex flex-col mt-10">
        <Navbar />
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Root;
