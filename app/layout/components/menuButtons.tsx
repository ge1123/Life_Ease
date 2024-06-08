import Link from 'next/link';

interface MenuButtonProps {
    menu: SidebarMenu;
    toggleMenu: ToggleMenu;
    isActive: boolean;
}

type MenuButton = () => React.JSX.Element;

const MenuButton: React.FC<MenuButtonProps> = ({ menu, toggleMenu, isActive }) => {
    return (
        <button
            onClick={() => toggleMenu(menu.id)}
            className={`sideBar__menuItem ${isActive ? 'sideBar__menuItemActive' : ''}`}
        >
            <span className="sideBar__icon"></span>
            <span className="sideBar__menuText">{menu.title}</span>
        </button>
    );
}

interface SubMenuProps {
    menu: SidebarMenu;
    toggleMenu: ToggleMenu;
    activeMenu: number | null;
}

const SubMenu: React.FC<SubMenuProps> = ({ menu, toggleMenu, activeMenu }) => {
    return (
        <>
            <MenuButton menu={menu} toggleMenu={toggleMenu} isActive={menu.id === activeMenu} />
            {menu.isExpanded && menu.children.length > 0 && (
                <div className="ml-4">
                    <MenuButtons menus={menu.children} toggleMenu={toggleMenu} activeMenu={activeMenu} />
                </div>
            )}
        </>
    );
};

interface RenderMenuItemsProps {
    menus: SidebarMenu[];
    toggleMenu: ToggleMenu;
    activeMenu: number | null;
}

const MenuButtons: React.FC<RenderMenuItemsProps> = ({ menus, toggleMenu, activeMenu }) => {
    return (
        <>
            {menus.map(menu => (
                <div key={menu.id} className="menuButtons__item">
                    {menu.children.length > 0 ? (
                        <SubMenu menu={menu} toggleMenu={toggleMenu} activeMenu={activeMenu} />
                    ) : (
                        <Link href={menu.url}>
                            <MenuButton menu={menu} toggleMenu={toggleMenu} isActive={menu.id === activeMenu} />
                        </Link>
                    )}
                </div>
            ))}
        </>
    );
};

export default MenuButtons;