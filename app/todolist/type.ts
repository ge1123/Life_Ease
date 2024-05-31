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

type SubmitHandler = () => void;

type ToggleModal = () => void;

type DeleteTodo = (id: number) => Promise<void>;

type UpdateTodo = (todoList: TodoList) => Promise<void>;

type CreateTodo = (todoList: TodoList) => Promise<void>;

type LoadTodos = (params?: TodoQueryParams) => Promise<void>;

interface UseTodoState {
    todos: TodoList[];
    loading: boolean;
    addTodo: CreateTodo;
    deleteTodo: DeleteTodo;
    updateTodo: UpdateTodo;
    loadTodos: LoadTodos;
}


