import Header from "./Header";
import { Outlet } from "react-router-dom";

const HeaderLayout = () => (
  <>
    <Header />

      <Outlet />
  
  </>
);

export default HeaderLayout;
