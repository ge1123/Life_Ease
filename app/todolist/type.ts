interface TodoList {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
    dueDate: Date;
}

interface TodoQueryParams {
    id?: number;
    title?: string;
    description?: string;
    isCompleted?: boolean;
    dueDate?: Date;
}

type DeleteTodoAsync = (id: number) => Promise<void>;

type UpdateTodoAsync = (todoList: TodoList) => Promise<void>;

type CreateTodoAsync = (todoList: TodoList) => Promise<void>;

type LoadTodosAsync = (params?: TodoQueryParams) => Promise<void>;

interface UseTodoState {
    todos: TodoList[];
    loading: boolean;
    addTodoAsync: CreateTodoAsync;
    deleteTodoAsync: DeleteTodoAsync;
    updateTodoAsync: UpdateTodoAsync;
    loadTodosAsync: LoadTodosAsync;
}


