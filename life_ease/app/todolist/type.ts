interface TodoList {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
    dueDate: Date;
}

interface TodoItem {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
    dueTime: string | null;
}

interface TodoItemProps {
    loading: boolean;
    todos: TodoItem[];
    handleDelete: HandleDeleteTodo;
}

interface ApiResponse {
    code: number;
    status: string;
    data: {
        items: TodoItem[];
        total: number;
    };
}

interface AddItemProps {
    toggleModal: () => void;
    addTodo: (todoItem: TodoList) => void;
}

interface DeleteButtonProps {
    id: number;
    handleDelete: HandleDeleteTodo;
}

interface HandleDeleteTodo {
    (id: number): Promise<void>;
}
