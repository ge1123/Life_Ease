import { Dispatch, SetStateAction } from 'react';

type HandleUpdateSubmit = (handleUpdate: (todo: TodoList) => void, todo: TodoList, toggleModal: () => void) => void;
export const handleUpdateSubmit: HandleUpdateSubmit = (handleUpdate, todo, toggleModal) => {
    handleUpdate(todo); // 更新事項 api
    toggleModal(); // 關閉編輯事項視窗
};

type HandleUpdateChange = (e: React.ChangeEvent<HTMLInputElement>, setTodo: Dispatch<SetStateAction<TodoList>>) => void;
export const handleUpdateChange: HandleUpdateChange = (e, setTodo) => {
    const { name, value, type } = e.target;
    setTodo(prevTodo => ({
        ...prevTodo,
        [name]: type === 'date' ? new Date(value) : value
    }));
};
