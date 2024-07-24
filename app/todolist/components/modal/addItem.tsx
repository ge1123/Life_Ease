"use client"; // This is a client component 👈🏽
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/todolist/styles/index.scss';
import React from 'react';
import AddCloseButton from '@/todolist/components/button/addCloseButton';
import AddSubmitButton from '@/todolist/components/button/addSubmitButton';
import AddForm from '@/todolist/components/form/addForm';
import useAddTodoState from '@/todolist/hooks/useAddTodo';
import { AddItemProps } from '@/todolist/types/index.type';

const AddItem: React.FC<AddItemProps> = ({ toggleModalVisibility }) => {

    const {
        todo,
        handleAddChange,
        handleAddSubmit,
        formatDate
    } = useAddTodoState(toggleModalVisibility);

    return (
        <div className="addItem__background">
            <div className="addItem__container">
                <h1
                    className="addItem__header">
                    新增事項
                </h1>
                <AddCloseButton toggleModalOpenStatus={toggleModalVisibility} />

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