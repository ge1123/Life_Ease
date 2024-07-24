import { Dispatch, SetStateAction } from 'react';
import {TodoList} from '@/todolist/types/index.type';

export type HandleUpdateSubmit = (handleUpdate: (todo: TodoList) => void, todo: TodoList, toggleModal: () => void) => void;
export type HandleUpdateChange = (e: React.ChangeEvent<HTMLInputElement>, setTodo: Dispatch<SetStateAction<TodoList>>) => void;
