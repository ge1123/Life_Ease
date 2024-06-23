import { HandleUpdateSubmit, HandleUpdateChange } from '@/todolist/types/index.type';

export const handleUpdateSubmit: HandleUpdateSubmit = (handleUpdate, todo, toggleModal) => {
    handleUpdate(todo); // 更新事項 api
    toggleModal(); // 關閉編輯事項視窗
};

export const handleUpdateChange: HandleUpdateChange = (e, setTodo) => {
    const { name, value, type } = e.target;
    setTodo(prevTodo => ({
        ...prevTodo,
        [name]: type === 'date' ? new Date(value) : value
    }));
};
