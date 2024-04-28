"use client"; // This is a client component 👈🏽
import React from 'react';

const DeleteButton = ({ id, handleDelete }: DeleteButtonProps) => {
    return (
        <button
            className="ml-auto bg-red-500 text-white px-4 py-2 rounded flex items-center justify-center"
            onClick={() => handleDelete(id)}
        >
            <i className="fas fa-trash align-middle"></i>
        </button>
    );
}



export default DeleteButton;