import { FormatDate, ToggleModalOpenState as ToggleModalOpenState } from '@/todolist/types/index.type';


// 格式化日期為 YYYY-MM-DD
export const formatDate: FormatDate = (date) => {

    if (typeof date === 'string') {
        return date.split('T')[0];
    }

    return date.toISOString().split('T')[0];
};

// 切換 Modal 狀態 (開啟/關閉)
export const toggleModalOpenState: ToggleModalOpenState = (setShowModal) => {
    setShowModal(prev => !prev);
};
