"use client"; // This is a client component 👈🏽
import React from 'react';
import '@/todolist/styles/index.scss';
import { DeleteButtonProps } from '@/todolist/types/index.type';
import BaseButton from '@/_components/baseButton';

const DeleteButton: React.FC<DeleteButtonProps> = ({ id, deleteTodo }) => {

    return (
        <BaseButton
            onClick={() => deleteTodo(id)}
            icon={<i className="fas fa-trash align-middle"></i>}
            className="deleteButton"
        />
    );
}



export default DeleteButton;