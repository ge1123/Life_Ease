import React, { useState } from 'react';
import { handleAddChange, formatDate, handleAddSubmit } from '@/todolist/services/index';

type HandleAddTodo = (todoItem: TodoList) => Promise<void>;

const useAddTodo = (toggleModal: () => void, handleAdd: HandleAddTodo) => {

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
        handleAddSubmit: () => handleAddSubmit(handleAdd, todo, toggleModal),
        formatDate
    })
}

export default useAddTodo;