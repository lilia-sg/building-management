import { useLocation, NavLink } from "react-router-dom";


export default function SidebarItem({pathLocation, pathName, pathLinkLabel}){
    const location = useLocation();
    const { pathname } = location;

    const isHere = pathname.includes(pathLocation);

    const icons = {
        "signals": {
            path1: "M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z",
            path2: "M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z"
        },
        "building":{
            path1:"M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z",
            path2:"M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z",
            path3:"M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
        },
        "tenants":{
            path1:"M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z",
            path2:"M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"
        },
        "news": {
            path1:"M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z",
            path2:"M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z",
        }
    };
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
                        d={icons[pathName].path1}
                            />
                    <path
                        className={`fill-current ${isHere ? 'text-indigo-300' : 'text-slate-400'}`}
                        d={icons[pathName].path2}
                            />
                    {icons[pathName].path3 &&  <path className={`fill-current ${pathname.includes('ecommerce') ? 'text-indigo-500' : 'text-slate-600'}`}
                        d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"/>}
                </svg>
                <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    {pathLinkLabel}
                </span>
            </div>
          </div>
        </NavLink>
      </li>
    );
}