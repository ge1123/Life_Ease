"use client"; // This is a client component 👈🏽

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { fetchListData, } from '@/utils/api';


async function loadSidebarMenu(setSideBarMenu: (data: SidebarMenu[]) => void) {
    const url = "https://localhost:7082/api/lifemanage/menu";

    const config: RequestInit = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    };
    const result: SidebarMenu[] = await fetchListData(url, config);
    setSideBarMenu(result);
}

const renderMenuItems = (menus: SidebarMenu[]) => {
    return menus.map(menu => (
        <div key={menu.id} className="mb-2">
            <Link href={menu.url}>
                <button className="w-48 py-2 text-sm font-semibold rounded-lg bg-stone-800 hover:bg-stone-500 transition-colors duration-300 ease-in-out text-left">
                    {menu.title}
                </button>
            </Link>
            {/* 如果有子層資料就渲染 */}
            {menu.children.length > 0 && (
                <div className="ml-4">
                    {renderMenuItems(menu.children)}
                </div>
            )}
        </div>
    ));
};


function Sidebar() {

    const [menus, setSideBarMenus] = useState<SidebarMenu[]>([]);

    useEffect(() => {
        loadSidebarMenu(setSideBarMenus);
    }, []);


    return (
        <aside className="w-64 h-full flex flex-col bg-stone-800 text-white p-5">
            <h2 className="text-lg font-bold uppercase mb-5">Menu</h2>
            {renderMenuItems(menus)}
        </aside>
    );
}

export default Sidebar;
