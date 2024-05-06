"use client"; // This is a client component 👈🏽
import React, { useState, useEffect, FormEvent } from 'react';
import InputField from './InputField';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AddItem = ({ toggleModal, addTodo }: AddItemProps) => {

    const [todo, setTodo] = useState<TodoList>({
        id: 0,
        title: '',
        description: '',
        isCompleted: false,
        dueDate: new Date()
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setTodo(prevTodo => ({
            ...prevTodo,
            [name]: type === 'date' ? new Date(value) : value
        }));
    };

    const handleSubmit: SubmitHandler = () => {
        addTodo(todo); // 新增事項 api
        toggleModal(); // 關閉新增事項視窗
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
            <div className="relative bg-white p-5 border border-gray-300 shadow-lg rounded-lg">
                <h1
                    className="text-2xl font-bold text-gray-700 mb-4">
                    新增事項
                </h1>
                <button
                    className="absolute top-3 right-3 bg-transparent text-black-500 font-bold p-2 rounded-full hover:bg-gray-100"
                    onClick={toggleModal}>
                    <i className="fas fa-times"></i> {/* 關閉視窗 X */}
                </button>
                <div
                    className="flex flex-col space-y-4">
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
                    className="bg-blue-500 text-white font-bold py-2 px-4 mt-4 rounded"
                    onClick={handleSubmit}>
                    <i className="fas fa-save"></i> {/* 儲存 icon */}
                </button>
            </div>
        </div>
    )

}


export default AddItem;