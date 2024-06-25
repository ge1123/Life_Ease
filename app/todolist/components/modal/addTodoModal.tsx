"use client"; // This is a client component 👈🏽

import React from 'react';
import AddItem from '@/todolist/components/modal/addItem';
import '@/todolist/styles/index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AddItemModalProps } from '@/todolist/types/index.type';
import AddButton from '@/todolist/components/button/addButton';



const AddItemModal: React.FC<AddItemModalProps> = ({ isModalOpen, toggleModalOpenStatus }) => {
    return (
        <>
            <AddButton toggleModalOpenStatus={toggleModalOpenStatus} />

            {
                isModalOpen &&
                <AddItem
                    toggleModalOpenStatus={toggleModalOpenStatus}
                />
            }
        </>
    )
}

export default AddItemModal;