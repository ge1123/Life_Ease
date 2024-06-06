import React, { useState, useEffect, FormEvent } from 'react';
import InputField from '@/todolist/components/inputField';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/todolist/styles/todolist.style.scss';

interface EditItemProps {
    toggleModal: () => void;
    handleUpdate: UpdateTodoAsync;
    id: number;
}
type HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => void;

const EditItem: React.FC<EditItemProps> = ({ toggleModal, handleUpdate, id }) => {

    const [todo, setTodo] = useState<TodoList>({
        id: id,
        title: '',
        description: '',
        isCompleted: false,
        dueDate: new Date()
    });

    const handleChange: HandleChange = (e) => {
        const { name, value, type } = e.target;
        setTodo(prevTodo => ({
            ...prevTodo,
            [name]: type === 'date' ? new Date(value) : value
        }));
    };

    const handleSubmit: SubmitHandler = () => {
        handleUpdate(todo); // 更新事項 api
        toggleModal(); // 關閉編輯事項視窗
    };

    return (
        <div className="editItem__background">
            <div className="editItem__container">
                <h1
                    className="editItem__header">
                    編輯
                </h1>
                <button
                    className="editItem__close-button"
                    onClick={toggleModal}>
                    <i className="fas fa-times"></i> {/* 關閉視窗 X */}
                </button>
                <div
                    className="editItem__form-container">
                    <InputField
                        label="標題"
                        type="text"
                        name="title"
                        placeholder="請輸入標題"
                        value={todo.title}
                        onChange={handleChange}
                    />
                    <InputField
                        label="內容"
                        type="text"
                        name="description"
                        placeholder="請輸入內容"
                        value={todo.description}
                        onChange={handleChange}
                    />
                    <InputField
                        label="到期日"
                        type="date"
                        name="dueDate"
                        placeholder="請輸入時間"
                        value={todo.dueDate.toISOString()}
                        onChange={handleChange}
                    />
                </div>
                <button
                    className="editItem__submit-button"
                    onClick={handleSubmit}>
                    <i className="fas fa-save"></i> {/* 儲存 icon */}
                </button>
            </div>
        </div>
    )
}


export default EditItem;