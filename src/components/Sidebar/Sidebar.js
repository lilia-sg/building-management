import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarItem from './SidebarItem';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 md:hidden md:z-auto transition-opacity duration-200`}
        aria-hidden="true">
      </div>

      {/* Sidebar */}
      <div
        id="sidebar"
        className={`flex flex-col absolute z-40 left-0 top-0 md:static md:left-auto md:top-auto md:translate-x-0 h-screen overflow-y-scroll md:overflow-y-auto no-scrollbar w-44 md:w-20 md:sidebar-expanded:!w-44 2xl:!w-44 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out
        }`}
      >

        <div className="space-y-8">
          <div>
            <ul className="mt-3">
              <SidebarItem pathLocation="signals" pathName="signals" pathLinkLabel="Signals"/>
              <SidebarItem pathLocation="building" pathName="building" pathLinkLabel="Building"/>              
              <SidebarItem pathLocation="tenants" pathName="tenants" pathLinkLabel="Tenants"/>              
              <SidebarItem pathLocation="news" pathName="news" pathLinkLabel="News"/>              
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Sidebar;