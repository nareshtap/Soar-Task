import { Outlet } from 'react-router-dom';
import SideBar from '../sidebar/SideBar';
import Header from '../header/Header';
import { useState } from "react";


const Layout = () => {

  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <div className="flex h-full md:h-screen">
      <SideBar showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className="flex-1 flex flex-col h-full">
        <Header setShowMenu={setShowMenu} showMenu={showMenu} />
        <div className="p-6 xl:py-[30px] xl:px-[40px] flex-none xl:flex-1 overflow-visible xl:overflow-auto bg-[#F5F7FA]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

