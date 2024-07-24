import React, { useState } from 'react';
import { useTodoContext } from '@/todolist/context/todoContext';
import { handleAddChange, formatDate, handleAddSubmit } from '@/todolist/services/index';
import { TodoList, UseAddTodo } from '@/todolist/types/index.type';

export const useAddTodo: UseAddTodo = (toggleModalOpenStatus) => {

    const todoContext = useTodoContext();

    const [todo, setTodo] = useState<TodoList>({
        id: 0,
        title: '',
        description: '',
        isCompleted: false,
        dueDate: new Date()
    });

    return ({
        todo,
        handleAddChange: (e: React.ChangeEvent<HTMLInputElement>) => handleAddChange(e, setTodo),
        handleAddSubmit: () => handleAddSubmit(todoContext.addTodo, todo, toggleModalOpenStatus),
        formatDate
    })
}

