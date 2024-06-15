// 月份
export const MONTHS_DICT: MonthsDict = {
    '一月': 1,
    '二月': 2,
    '三月': 3,
    '四月': 4,
    '五月': 5,
    '六月': 6,
    '七月': 7,
    '八月': 8,
    '九月': 9,
    '十月': 10,
    '十一月': 11,
    '十二月': 12
};

// 當月為預設月份
export const getCurrentMonthIndex = (): number => {
    const currentMonthIndex = new Date().getMonth() + 1; // getMonth() 返回的月份是 0-11，所以需要加 1
    return currentMonthIndex;
};
