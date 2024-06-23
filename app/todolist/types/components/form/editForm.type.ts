import { TodoList } from '@/todolist/types/index.type';


/**
 * 修改資料的表格。
 * @interface InputFormProps
 * @property {TodoList} todo - 待辦事項對象。
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} handleChange - 處理輸入變更的函數。
 */
export interface EditFormProps {
    todo: TodoList;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
