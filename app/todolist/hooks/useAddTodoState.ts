import React, { useState } from 'react';
import { handleAddChange, formatDate, handleAddSubmit } from '@/todolist/services/index';
import { TodoList, UseAddTodoHook } from '@/todolist/types/index.type';

const useAddTodo: UseAddTodoHook = (toggleModalOpenStatus, addTodo) => {

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
        handleAddSubmit: () => handleAddSubmit(addTodo, todo, toggleModalOpenStatus),
        formatDate
    })
}

export default useAddTodo;