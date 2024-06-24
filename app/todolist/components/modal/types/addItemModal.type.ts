
import { CreateTodoAsync } from '@/todolist/types/index.type';

/**
 * 顯示查詢到的代辦事項資料表格。
 * 
 * @interface AddItemModalProps
 * @property {boolean} showModal - 指示添加模態框是否可見。
 * @property {() => void} toggleModal - 用於切換模態框可見性的函數。
 * @property {CreateTodoAsync} addTodo - 用於添加待辦事項項目的函數。
 */
export interface AddItemModalProps {
    isModalOpen: boolean;
    toggleModalOpenStatus: () => void;
    addTodo: CreateTodoAsync;
}