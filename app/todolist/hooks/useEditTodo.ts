import { useState } from 'react';
import { handleUpdateSubmit, handleUpdateChange } from '@/todolist/services/index';

const useEditTodo = (id: number, toggleModal: () => void, handleUpdate: UpdateTodoAsync) => {

    const [todo, setTodo] = useState<TodoList>({
        id: id,
        title: '',
        description: '',
        isCompleted: false,
        dueDate: new Date()
    });

    return ({
        todo,
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => handleUpdateChange(e, setTodo),
        handleSubmit: () => handleUpdateSubmit(handleUpdate, todo, toggleModal)
    })
}



export default useEditTodo;