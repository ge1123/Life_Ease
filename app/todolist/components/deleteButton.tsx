"use client"; // This is a client component 👈🏽
import React from 'react';
import '@/todolist/styles/todolist.style.scss';

interface DeleteButtonProps {
    id: number;
    handleDelete: DeleteTodoAsync;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id, handleDelete }) => {
    return (
        <button
            className="deleteButton"
            onClick={() => handleDelete(id)}
        >
            <i className="fas fa-trash align-middle"></i>
        </button>
    );
}



export default DeleteButton;