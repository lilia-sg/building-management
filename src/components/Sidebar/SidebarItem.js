import { useLocation, NavLink } from "react-router-dom";


export default function SidebarItem({pathLocation, pathLinkName}){
    const location = useLocation();
    const { pathname } = location;

    const isHere = pathname.includes(pathLocation);

    return (
        <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${isHere && 'bg-slate-900'}`}>
        <NavLink end to={`/${pathLocation}`}
          className={`block text-slate-200 truncate transition duration-150 ${isHere ? 'hover:text-slate-200' : 'hover:text-white'}`}
        >
          <div className="flex items-center justify-between">
            <div className="grow flex items-center">
              <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                <path
                  className={`fill-current ${isHere ? 'text-indigo-500' : 'text-slate-600'}`}
                  d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z"
                />
              </svg>
              <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                {pathLinkName}
              </span>
            </div>
          </div>
        </NavLink>
      </li>
    );
}