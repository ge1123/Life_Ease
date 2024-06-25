import { UpdateTodoAsync, TodoList, FormatDate } from '@/todolist/types/index.type';

/**
 * 編輯資料的按鈕。
 * @interface EditItemProps
 * @property {() => void} toggleModal - 用於切換模態框可見性的函數。
 * @property {UpdateTodoAsync} updateTodo - 用於更新待辦事項的函數。
 * @property {number} id - 要編輯的待辦事項的 ID。
 */
export interface EditItemProps {
    toggleModal: () => void;
    id: number;
}

