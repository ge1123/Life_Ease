"use client"; // This is a client component 👈🏽

import React from 'react';
import AddItem from '@/todolist/components/modal/addItem';
import '@/todolist/styles/index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ShowAddWindowProps } from '@/todolist/types/index.type';



const AddItemModal: React.FC<ShowAddWindowProps> = ({ isModalOpen, toggleModalOpenStatus, addTodo }) => {
    return (
        <>
            {
                isModalOpen &&
                <AddItem
                    toggleModalOpenStatus={toggleModalOpenStatus}
                    addTodo={addTodo}
                />
            }
        </>
    )
}

export default AddItemModal;