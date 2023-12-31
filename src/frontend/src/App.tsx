import { useLocation, Outlet } from 'react-router-dom';
import Sidebar from './components/SideBar';
import SidebarPartner from './pages/partner/components/SideBarPartner';

export default function CustomRouter() {
  const location = useLocation();

  if (location.pathname === '/' || location.pathname === '/partner-registration' || location.pathname === '/analyst-registration') {
    return (
      <div className="bg-[rgb(243,243,243)] p-7 text-xl font-semibold flex-grow">
        <Outlet />
      </div>
    );
  }

  if (localStorage.getItem('userType') === 'partner') {
    return (
      <div className="flex">
        <div className="w-[17%] h-screen">
          <SidebarPartner />
        </div>
        <div className="flex-1 bg-[rgb(243,243,243)] p-7 text-xl font-semibold flex-grow">
          <Outlet />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex">
        <div className="w-[17%] h-screen">
          <Sidebar />
        </div>
        <div className="flex-1 bg-[rgb(243,243,243)] p-7 text-xl font-semibold flex-grow">
          <Outlet />
        </div>
      </div>
    );
}
}
