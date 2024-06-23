import { HandleAddSubmit, HandleAddChange } from '@/todolist/types/index.type';

export const handleAddSubmit: HandleAddSubmit = (handleAdd, todo, toggleModalOpenState) => {
    handleAdd(todo); // 新增事項 api
    toggleModalOpenState((prev) => !prev); // 關閉新增事項視窗
};

export const handleAddChange: HandleAddChange = (e, setTodo) => {
    const { name, value, type, checked } = e.target;
    setTodo(prevTodo => ({
        ...prevTodo,
        [name]: type === 'date' ? new Date(value) : value
    }));
};