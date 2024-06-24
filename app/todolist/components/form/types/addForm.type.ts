import { TodoList } from "@/todolist/types/index.type";


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