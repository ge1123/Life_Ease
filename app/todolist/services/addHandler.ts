import { Dispatch, SetStateAction } from 'react';

type HandleAddSubmit = (handleAdd: (todo: TodoList) => void, todo: TodoList, toggleModal: () => void) => void;
export const handleAddSubmit: HandleAddSubmit = (handleAdd, todo, toggleModal) => {
    handleAdd(todo); // 新增事項 api
    toggleModal(); // 關閉新增事項視窗
};

type HandleAddChange = (e: React.ChangeEvent<HTMLInputElement>, setTodo: Dispatch<SetStateAction<TodoList>>) => void;
export const handleAddChange: HandleAddChange = (e, setTodo) => {
    const { name, value, type, checked } = e.target;
    setTodo(prevTodo => ({
        ...prevTodo,
        [name]: type === 'date' ? new Date(value) : value
    }));
};