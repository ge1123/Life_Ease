import { FormatDate, ToggleModalVisibility } from '@/todolist/types/index.type';


// 格式化日期為 YYYY-MM-DD
export const formatDate: FormatDate = (date) => {
    return date.toISOString().split('T')[0];
};

// 切換 Modal 狀態 (開啟/關閉)
export const toggleModalVisibility: ToggleModalVisibility = (setShowModal) => {
    setShowModal(prev => !prev);
};
