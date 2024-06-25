"use client"; // This is a client component 👈🏽
import React from 'react';
import '@/todolist/styles/index.scss';
import { DeleteButtonProps } from '@/todolist/types/index.type';
import BaseButton from '@/_components/baseButton';
import { useTodoContext } from '@/todolist/context/todoContext';

const DeleteButton: React.FC<DeleteButtonProps> = ({ id }) => {

    const todoContext = useTodoContext();

    return (
        <BaseButton
            onClick={() => todoContext.deleteTodo(id)}
            icon={<i className="fas fa-trash align-middle"></i>}
            className="deleteButton"
        />
    );
}



export default DeleteButton;