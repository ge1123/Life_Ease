import { TodoList, ToggleModalOpenState } from '@/todolist/types/index.type';
import { Dispatch, SetStateAction } from 'react';

export type HandleAddSubmit =
    (handleAdd: (todo: TodoList) => void,
        todo: TodoList,
        toggleModal: ToggleModalOpenState)
        => void;

export type HandleAddChange =
    (e: React.ChangeEvent<HTMLInputElement>,
        setTodo: Dispatch<SetStateAction<TodoList>>) => void;

export type HandleAddTodo = (todoItem: TodoList) => Promise<void>;
