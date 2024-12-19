import { NavLink } from 'react-router-dom';
import { routes } from '../../utils/constant/constant';


const SideBar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-8">My Dashboard</h1>
      <nav>
        <ul className="space-y-4">
          {routes.map((route, index) => (
            <li key={index}>
              <NavLink
                to={route.link}
                className={({ isActive }) =>
                  `block p-2 rounded ${isActive ? 'bg-blue-500 font-bold' : 'hover:bg-gray-700'
                  }`
                }
              >
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
