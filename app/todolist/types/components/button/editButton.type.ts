import { ToggleModalOpenState, UpdateTodoAsync } from '@/todolist/types/index.type';

/**
 * 編輯代辦事項的按鈕。
 * 
 * @type {EditButtonProps}
 * @property {number} id - 要編輯的待辦事項項目的 ID。
 * @property {UpdateTodoAsync} updateTodo - 用於更新待辦事項項目的函數。
 */
export type EditButtonProps = {
    id: number;
    updateTodo: UpdateTodoAsync;
}

/**
 * 編輯代辦事項的畫面。
 * 
 * @type {ShowEditWindowProps}
 * @property {boolean} showModal - 指示編輯模態框是否可見。
 * @property {number} id - 要編輯的待辦事項項目的 ID。
 * @property {ToggleModal} toggleModal - 用於切換模態框可見性的函數。
 * @property {UpdateTodoAsync} updateTodo - 用於更新待辦事項項目的函數。
 */
export type ShowEditWindowProps = {
    showModal: boolean,
    id: number,
    toggleModal: () =>void,
    updateTodo: UpdateTodoAsync
}

/**
 * 更新代辦事項資料的按鈕。
 * 
 * @type {UpdateButtonProps}
 * @property {ToggleModal} toggleModal - 用於切換模態框可見性的函數。
 */
export type UpdateButtonProps = {
    toggleModal: () => void;
}
