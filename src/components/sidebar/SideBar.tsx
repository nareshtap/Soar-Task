import { NavLink } from 'react-router-dom';
import { routes } from '../../utils/constant/constant';
import Logo from '../../../public/assets/logo_icon.svg'

const SideBar = ({ showMenu }: { showMenu: boolean }) => {
  return (
    <div className={`max-w-64 min-w-64 w-full h-full flex !flex-col bg-white text-white flex-1 ${!showMenu && ' hidden'} lg:flex lg:relative lg:left-[none] z-[999] fixed left-0 flex-col border-r border-[#E6EFF5]`}>
      <h1 className="text-2xl flex gap-[10px] h-auto py-4 md:py-0 md:h-[100px] justify-center items-center font-semibold text-[#343C6A] border-[#E6EFF5] border-b">
        <img src={Logo} alt="" />
        Soar Task
      </h1>
      <nav className='py-3 flex-1 overflow-auto'>
        <ul className="flex flex-col">
          {routes.map((route, index) => (
            <li key={index}>
              <NavLink
                to={route.link}
                className={({ isActive }) =>
                  `flex text-[#B1B1B1] relative leading-[60px] gap-[26px] px-9 items-center rounded ${isActive ? ' text-black font-bold before:left-0 before:content-[" "] before:absolute before:w-[6px] before:h-full before:bg-black before:rounded-tr-[10px] before:rounded-br-[10px]' : 'hover:text-black '
                  }`
                }
              >
                {route.Icon}
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
