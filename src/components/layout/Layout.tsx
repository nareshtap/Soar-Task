import { Outlet } from 'react-router-dom';
import SideBar from '../sidebar/SideBar';
import Header from '../header/Header';

const Layout = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-4 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

