// utils/config.ts

const lifeManageUrl: string = "http://localhost:8013";

export const BASE_URLS = {
    INDEX:"http://localhost:3000",
    TODO: `${lifeManageUrl}/api/lifemanage/todo`,
    MENU: `${lifeManageUrl}/api/lifemanage/menu`,
    MONTHLYTASKS: `${lifeManageUrl}/api/lifemanage/monthlytasks`,
    // Add other base URLs here
};
