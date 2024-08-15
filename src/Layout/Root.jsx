import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto">
        <div className="mt-10">
          <Navbar />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
