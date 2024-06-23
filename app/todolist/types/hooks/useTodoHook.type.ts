import { TodoList, TodoQueryParams } from "@/todolist/types/common.type";

export type DeleteTodoAsync = (id: number) => Promise<void>;

export type UpdateTodoAsync = (todoList: TodoList) => Promise<void>;

export type AddTodoAsync = (todoList: TodoList) => Promise<void>;

export type LoadTodosAsync = (params?: TodoQueryParams) => Promise<void>;

export type UseTodoStateHook = () => UseTodoState;


export type UseTodoState = {
    todos: TodoList[];
    loading: boolean;
    addTodoAsync: AddTodoAsync;
    deleteTodoAsync: DeleteTodoAsync;
    updateTodoAsync: UpdateTodoAsync;
    loadTodosAsync: LoadTodosAsync;
}

