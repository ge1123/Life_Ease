"use client"; // This is a client component 👈🏽

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { loadSidebarMenu, } from '@/layout/api';
import MenuButtons from '@/layout/components/menuButtons';
import {BASE_URLS} from '@/utils/config';



export default function Sidebar() {

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
            <Link href={BASE_URLS.INDEX}>
                <button className="text-lg font-bold  mb-7">
                    Home
                </button>
            </Link>
            <MenuButtons
                menus={menus}
                toggleMenu={toggleMenu}
            />
        </aside>
    );
}
