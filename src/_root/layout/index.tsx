import { Outlet } from "react-router-dom";
import {Header } from "./components";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default RootLayout;
