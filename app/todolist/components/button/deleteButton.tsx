"use client"; // This is a client component 👈🏽
import React from 'react';
import '@/todolist/styles/index.scss';

interface DeleteButtonProps {
    id: number;
    deleteTodo: DeleteTodoAsync;
}

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