import { useState } from 'react';
import { handleUpdateSubmit, handleUpdateChange } from '@/todolist/services/index';
import { TodoList } from '@/todolist/types/index.type';
import { UseEditTodoHook } from '@/todolist/types/index.type';
/**
 * 自定義 Hook 用於處理編輯 todo 項目
 * @param id - 要編輯的 todo 項目的 ID
 * @param toggleModal - 用於顯示或隱藏編輯窗口的函數
 * @param updateTodo - 用於更新 todo 項目的異步函數
 * @returns 包含 todo 資料對象，處理變更的函數和提交編輯的函數
 */
const useEditTodo: UseEditTodoHook = (id, toggleModal, updateTodo) => {

    // 初始化編輯的 todo 資料
    // 點擊編輯按鈕時會帶入原本的 todo 資料
    const [todo, setTodo] = useState<TodoList>({
        id: id,
        title: '',
        description: '',
        isCompleted: false,
        dueDate: new Date()
    });

    /**
    * 處理輸入變更的函數
    * @param e - 輸入變更事件
    */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleUpdateChange(e, setTodo);
    };

    /**
     * 提交編輯內容的函數
     */
    const handleSubmit = () => {
        handleUpdateSubmit(updateTodo, todo, toggleModal);
    };

    return ({
        todo,
        handleChange: handleChange,
        handleSubmit: handleSubmit
    })
}



export default useEditTodo;