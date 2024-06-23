import {UpdateTodoAsync} from '@/todolist/types/index.type';
import { TodoList } from '@/todolist/types/index.type';

/**
 * 編輯資料的按鈕。
 * @interface EditItemProps
 * @property {() => void} toggleModal - 用於切換模態框可見性的函數。
 * @property {UpdateTodoAsync} updateTodo - 用於更新待辦事項的函數。
 * @property {number} id - 要編輯的待辦事項的 ID。
 */
export interface EditItemProps {
    toggleModal: () => void;
    updateTodo: UpdateTodoAsync;
    id: number;
}

/**
 * 關閉視窗的按鈕。
 * @interface CloseButtonProps
 * @property {() => void} toggleModal - 用於切換模態框可見性的函數。
 */
export interface CloseButtonProps {
    toggleModal: () => void;
}

/**
 * 修改資料的表格。
 * @interface InputFormProps
 * @property {TodoList} todo - 待辦事項對象。
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} handleChange - 處理輸入變更的函數。
 */
export interface UpdateFormProps {
    todo: TodoList;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * 修改資料的按鈕。
 * @interface SubmitButtonProps
 * @property {() => void} handleSubmit - 處理提交操作的函數。
 */
export interface UpdateButtonProps {
    handleSubmit: () => void;
}