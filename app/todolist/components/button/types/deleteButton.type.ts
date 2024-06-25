import { DeleteTodoAsync } from '@/todolist/types/index.type';

/**
 * 刪除代辦事項的按鈕。
 * 
 * @interface DeleteButtonProps
 * @property {number} id - 要刪除的待辦事項項目的 ID。
 * @property {DeleteTodoAsync} deleteTodo - 用於刪除待辦事項項目的函數。
 */
export type DeleteButtonProps = {
    id: number;
}