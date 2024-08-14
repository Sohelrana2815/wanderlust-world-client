import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <div className="mt-10">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
