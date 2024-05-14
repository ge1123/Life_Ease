interface SidebarMenu {
    id: number;
    title: string;
    icon: string;
    url: string;
    parentId: number | null;
    order: number;
    permission: string;
    description: string;
    children: SidebarMenu[];
}

