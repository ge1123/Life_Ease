import { ToggleModalOpenState } from "./index.type";



export interface TodoList {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
    dueDate: Date;
}

export interface TodoQueryParams {
    id?: number;
    title?: string;
    description?: string;
    isCompleted?: boolean;
    dueDate?: Date;
}


/**
 * 關閉視窗的按鈕。
 * @interface CloseButtonProps
 * @property {ToggleModal} toggleModal - 用於切換模態框可見性的函數。
 */
export interface CloseButtonProps {
    toggleModal: () => void;
}
