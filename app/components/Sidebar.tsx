"use client"; // This is a client component 👈🏽

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { fetchListData, } from '@/utils/api';

interface MenuButtonProps {
    menu: SidebarMenu;
    toggleMenu: (id: number) => void;
}

async function loadSidebarMenu(setSideBarMenu: (data: SidebarMenu[]) => void) {
    const url: string = "https://localhost:7082/api/lifemanage/menu";

    const config: RequestInit = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    };
    const result: SidebarMenu[] = await fetchListData(url, config);
    setSideBarMenu(result);
}

const MenuButton = ({ menu, toggleMenu }: MenuButtonProps) => {
    return (
        <button
            onClick={() => toggleMenu(menu.id)}
            className="w-48 py-2 text-sm font-semibold rounded-lg bg-stone-800 hover:bg-stone-500 transition-colors duration-300 ease-in-out text-left"
        >
            {menu.title}
        </button>
    )
}

const renderMenuItems = (menus: SidebarMenu[], toggleMenu: (id: number) => void) => {
    return menus.map(menu => (
        <div key={menu.id} className="mb-2">
            {menu.children.length > 0 ? (
                <MenuButton menu={menu} toggleMenu={toggleMenu} />
            ) : (
                <Link href={menu.url}>
                    <MenuButton menu={menu} toggleMenu={toggleMenu} />
                </Link>
            )}
            {/* Render children if any */}
            {menu.isExpanded && menu.children.length > 0 && (
                <div className="ml-4">
                    {renderMenuItems(menu.children, toggleMenu)}
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

    const toggleMenu = (id: number) => {
        setSideBarMenus(menus =>
            menus.map(menu =>
                menu.id === id
                    ? { ...menu, isExpanded: !menu.isExpanded }
                    : menu
            )
        );
    };

    return (
        <aside className="w-64 h-full flex flex-col bg-stone-800 text-white p-5">
            <h2 className="text-lg font-bold uppercase mb-5">Menu</h2>
            {renderMenuItems(menus, toggleMenu)}
        </aside>
    );
}

export default Sidebar;
