import React from 'react';

interface DeleteButtonProps {
    id: number;
}

async function deleteTodo(id: number) {
    try {
        const response = await fetch(`https://localhost:7082/api/lifemanage/todo/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('Delete success');
        } else {
            throw new Error('Failed to delete');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
    return (
        <button
            className="ml-auto bg-red-500 text-white px-4 py-2 rounded flex items-center justify-center"
            onClick={() => deleteTodo(id)}
        >
            <i className="fas fa-trash align-middle"></i>
        </button>
    );
}



export default DeleteButton;