import { Outlet } from "react-router-dom";
// import Menus from "./menu";
import "./index.less"

const LayoutComponent = () => {

  return (
    <div className="h-100%">
      {/* <Menus /> */}
      <Outlet />
    </div>
  );
};
export default LayoutComponent;
