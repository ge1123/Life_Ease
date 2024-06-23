"use client"; // This is a client component 👈🏽
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/todolist/styles/index.scss';
import useAddTodo from '@/todolist/hooks/useAddTodo';
import { AddItemProps } from '@/todolist/types/index.type';
import AddSubmitButton from '@/todolist/components/button/addSubmitButton';
import AddCloseButton from '@/todolist/components/button/addCloseButton';
import AddForm from '@/todolist/components/form/addForm';

const AddItem: React.FC<AddItemProps> = ({ toggleModalOpenStatus, addTodo }) => {

    const {
        todo,
        handleAddChange,
        handleAddSubmit,
        formatDate
    } = useAddTodo(toggleModalOpenStatus, addTodo);

    return (
        <div className="addItem__background">
            <div className="addItem__container">
                <h1
                    className="addItem__header">
                    新增事項
                </h1>
                <AddCloseButton toggleModalOpenStatus={toggleModalOpenStatus} />

                <div
                    className="addItem__form-container">
                    <AddForm todo={todo} formatDate={formatDate} handleAddChange={handleAddChange} />
                </div>
                <AddSubmitButton handleAddSubmit={handleAddSubmit} />
            </div>
        </div>
    )

}


export default AddItem;