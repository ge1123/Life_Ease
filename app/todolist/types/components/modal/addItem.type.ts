import { TodoList, AddTodoAsync, ToggleModalOpenState } from "@/todolist/types/index.type";

/**
 * 開啟填寫新一筆資料的按鈕。
 * 
 * @interface AddButtonProps
 * @property {() => void} toggleModal - 用於切換模態框可見性的函數。
 */
export interface AddButtonProps {
    toggleModalOpenStatus: () => void ;
};

/**
 * 新一筆資料的表格。
 * 
 * @interface AddFormProps
 * @property {TodoList} todo - 待辦事項對象。
 * @property {(date: Date) => string} formatDate - 用於格式化日期的函數。
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} handleAddChange - 處理輸入變更的函數。
 */
export interface AddFormProps {
    todo: TodoList;
    formatDate: (date: Date) => string;
    handleAddChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * 新增資料的按鈕。
 * 
 * @interface AddItemProps
 * @property {() => void} toggleModal - 用於切換模態框可見性的函數。
 * @property {AddTodoAsync} addTodo - 用於添加待辦事項的函數。
 */
export interface AddItemProps {
    toggleModalOpenStatus: () => void;
    addTodo: AddTodoAsync;
}

export type CloseButtonProps = {
    toggleModal: () => void;
}