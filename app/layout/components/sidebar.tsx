"use client"; // This is a client component 👈🏽

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { loadSidebarMenu, } from '@/layout/api';
import MenuButtons from '@/layout/components/menuButtons';
import {BASE_URLS} from '@/utils/config';
import "@/styles/menu.style.scss";


export default function Sidebar() {

    const [menus, setSideBarMenus] = useState<SidebarMenu[]>([]);
    const [activeMenu, setActiveMenu] = useState<number | null>(null);

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
        setActiveMenu(id);
    };

    return (
        <aside className="sideBar__container">
            <Link href={BASE_URLS.INDEX}>
                <button className="sideBar__indexButton">
                    Home
                </button>
            </Link>
            <MenuButtons
                menus={menus}
                toggleMenu={toggleMenu}
                activeMenu={activeMenu}
            />
        </aside>
    );
}
