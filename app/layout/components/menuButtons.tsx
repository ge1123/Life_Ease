import Link from 'next/link';

interface MenuButtonProps {
    menu: SidebarMenu;
    toggleMenu: ToggleMenu;
}

type MenuButton = () => React.JSX.Element;

const MenuButton: React.FC<MenuButtonProps> = ({ menu, toggleMenu }) => {
    return (
        <button
            onClick={() => toggleMenu(menu.id)}
            className="w-48 py-2 text-sm font-semibold rounded-lg bg-stone-800 hover:bg-stone-500 transition-colors duration-300 ease-in-out text-left"
        >
            {menu.title}
        </button>
    )
}

interface SubMenuProps {
    menu: SidebarMenu;
    toggleMenu: ToggleMenu;
}

const SubMenu: React.FC<SubMenuProps> = ({ menu, toggleMenu }) => {
    return (
        <>
            <MenuButton menu={menu} toggleMenu={toggleMenu} />
            {menu.isExpanded && menu.children.length > 0 && (
                <div className="ml-4">
                    <MenuButtons menus={menu.children} toggleMenu={toggleMenu} />
                </div>
            )}
        </>
    );
};

interface RenderMenuItemsProps {
    menus: SidebarMenu[];
    toggleMenu: ToggleMenu;
}

const MenuButtons: React.FC<RenderMenuItemsProps> = ({ menus, toggleMenu }) => {
    return (
        <>
            {menus.map(menu => (
                <div key={menu.id} className="mb-2">
                    {menu.children.length > 0 ? (
                        <SubMenu menu={menu} toggleMenu={toggleMenu} />
                    ) : (
                        <Link href={menu.url}>
                            <MenuButton menu={menu} toggleMenu={toggleMenu} />
                        </Link>
                    )}
                </div>
            ))}
        </>
    );
};

export default MenuButtons;