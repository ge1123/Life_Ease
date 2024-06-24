import {TodoList, TodoQueryParams} from '@/todolist/types/common.type';


export type RemoveTodoAsync = (id: number) => Promise<void>;

export type ModifyTodoAsync = (todoList: TodoList) => Promise<void>;

export type CreateTodoAsync = (todoList: TodoList) => Promise<void>;

export type FetchTodosAsync = (params?: TodoQueryParams) => Promise<TodoList[]>;








