"use client"; // This is a client component 👈🏽

import '@/todolist/styles/index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import AddButton from '@/todolist/components/button/addButton';
import AddItem from '@/todolist/components/modal/addItem';
import {useModal} from '@/todolist/hooks/useModal';
import { AddItemModalProps } from '@/todolist/types/index.type';



const AddItemModal: React.FC<AddItemModalProps> = () => {

    const { isModalOpen, toggleModalVisibility } = useModal();

    return (
        <>
            <AddButton toggleModalVisibility={toggleModalVisibility} />

            {
                isModalOpen &&
                <AddItem
                    toggleModalVisibility={toggleModalVisibility}
                />
            }
        </>
    )
}

export default AddItemModal;