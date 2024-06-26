
/**
 * 新增資料的按鈕。
 * 
 * @interface AddItemProps
 * @property {() => void} toggleModal - 用於切換模態框可見性的函數。
 * @property {AddTodoAsync} addTodo - 用於添加待辦事項的函數。
 */
export interface AddItemProps {
    toggleModalVisibility: () => void;
}

