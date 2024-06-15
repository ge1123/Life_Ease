import { Dispatch, SetStateAction } from 'react';

// 格式化日期為 YYYY-MM-DD
type FormatDate = (date: Date) => string;
export const formatDate: FormatDate = (date) => {
    return date.toISOString().split('T')[0];
};

type ToggleModal = (setShowModal: Dispatch<SetStateAction<boolean>>) => void;
export const toggleModal: ToggleModal = (setShowModal) => {
    setShowModal(prev => !prev);
};
