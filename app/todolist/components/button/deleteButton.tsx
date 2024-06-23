"use client"; // This is a client component 👈🏽
import React from 'react';
import '@/todolist/styles/index.scss';
import { DeleteButtonProps } from '@/todolist/types/index.type';

const DeleteButton: React.FC<DeleteButtonProps> = ({ id, deleteTodo }) => {
    return (
        <button
            className="deleteButton"
            onClick={() => deleteTodo(id)}
        >
            <i className="fas fa-trash align-middle"></i>
        </button>
    );
}



export default DeleteButton;