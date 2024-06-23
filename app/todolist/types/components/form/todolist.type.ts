
import { CreateTodoAsync, ToggleModalOpenState } from '@/todolist/types/index.type';

/**
 * 搜尋資料的對話框。
 * 
 * @interface SearchBoxProps
 * @property {string} searchKeyword - 當前的搜索關鍵字。
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} handleSearchChange - 處理搜索輸入變更的函數。
 */
export interface SearchBoxProps {
    searchKeyword: string;
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * 查詢資料的按鈕。
 * 
 * @interface SearchButtonProps
 * @property {() => void} handleSearch - 執行搜索操作的函數。
 */
export interface SearchButtonProps {
    handleSearch: () => void;
}


/**
 * 顯示查詢到的代辦事項資料表格。
 * 
 * @interface ShowAddWindowProps
 * @property {boolean} showModal - 指示添加模態框是否可見。
 * @property {() => void} toggleModal - 用於切換模態框可見性的函數。
 * @property {CreateTodoAsync} addTodo - 用於添加待辦事項項目的函數。
 */
export interface AddItemModalProps {
    isModalOpen: boolean;
    toggleModalOpenStatus: () => void;
    addTodo: CreateTodoAsync;
}