"use client"; // This is a client component 👈🏽
import React, { useState } from 'react';
import InputField from '@/todolist/components/inputField';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/todolist/styles/todolist.style.scss';

interface AddItemProps {
    toggleModal: () => void;
    handleAdd: HandleAddTodo;
}
type HandleAddTodo = (todoItem: TodoList) => Promise<void>;
type HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => void;
type FormatDate = (date: Date) => string;

const AddItem: React.FC<AddItemProps> = ({ toggleModal, handleAdd }) => {

    const [todo, setTodo] = useState<TodoList>({
        id: 0,
        title: '',
        description: '',
        isCompleted: false,
        dueDate: new Date()
    });

    const handleChange: HandleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setTodo(prevTodo => ({
            ...prevTodo,
            [name]: type === 'date' ? new Date(value) : value
        }));
    };

    const handleSubmit: SubmitHandler = () => {
        handleAdd(todo); // 新增事項 api
        toggleModal(); // 關閉新增事項視窗
    };

    // 格式化日期為 YYYY-MM-DD
    const formatDate: FormatDate = (date) => {
        return date.toISOString().split('T')[0];
    };

    return (
        <div className="addItem__background">
            <div className="addItem__container">
                <h1
                    className="addItem__header">
                    新增事項
                </h1>
                <button
                    className="addItem__close-button"
                    onClick={toggleModal}>
                    <i className="fas fa-times"></i> {/* 關閉視窗 X */}
                </button>
                <div
                    className="addItem__form-container">
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
                        value={formatDate(todo.dueDate)}
                        onChange={handleChange}
                    />
                </div>
                <button
                    className="addItem__submit-button"
                    onClick={handleSubmit}>
                    <i className="fas fa-save"></i> {/* 儲存 icon */}
                </button>
            </div>
        </div>
    )

}


export default AddItem;