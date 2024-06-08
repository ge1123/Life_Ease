import { BASE_URLS } from '@/utils/config';
import { fetchListDataAsync, } from '@/utils/apiClient';


type SetSideBarMenu = (data: SidebarMenu[]) => void;

type LoadSidebarMenu = (setSideBarMenu: SetSideBarMenu) => Promise<void>;

const loadSidebarMenu: LoadSidebarMenu = async (setSideBarMenu) => {
    
    const url: string = BASE_URLS.MENU;

    try {
        const result: SidebarMenu[] = await fetchListDataAsync(url);
        setSideBarMenu(result);
    } catch (error) {
        console.error("Failed to load sidebar menu:", error);
    }
};


export { loadSidebarMenu };