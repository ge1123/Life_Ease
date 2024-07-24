import { Dispatch, SetStateAction } from 'react';
import { TodoList, ToggleModalVisibility } from '@/todolist/types/index.type';

export type HandleAddSubmit =
    (handleAdd: (todo: TodoList) => void,
        todo: TodoList,
        toggleModal: ToggleModalVisibility)
        => void;

export type HandleAddChange =
    (e: React.ChangeEvent<HTMLInputElement>,
        setTodo: Dispatch<SetStateAction<TodoList>>) => void;

export type HandleAddTodo = (todoItem: TodoList) => Promise<void>;
