import { Header } from "@/components";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <div className="align-element">
      <Outlet />
      </div>
    </>
  );
};
export default HomeLayout;