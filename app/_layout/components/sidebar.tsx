"use client"; // This is a client component 👈🏽

import Link from 'next/link';
import MenuButtons from '@/_layout/components/menuButtons';
import {BASE_URLS} from '@/_utils/config';
import useSidebarHook from '@/_layout/hooks/useSidebarHook';
import "@/_styles/menu.style.scss";

export default function Sidebar() {

    const {menus, activeMenu, toggleMenu} = useSidebarHook();

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
