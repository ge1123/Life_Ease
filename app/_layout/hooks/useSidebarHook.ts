import { useState, useEffect } from 'react';
import { loadSidebarMenu, } from '@/_layout/api';

const useSidebarHook = () => {

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
        {
            menus,
            activeMenu,
            toggleMenu
        }
    )
}



export default useSidebarHook;