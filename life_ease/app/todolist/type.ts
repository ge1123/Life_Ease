interface TodoList {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
    dueDate: Date;
}

interface TodoItemProps {
    loading: boolean;
    todos: TodoList[];
    handleDelete: DeleteTodoHandler;
}

interface AddItemProps {
    toggleModal: () => void;
    addTodo: HandleAddTodo;
}

interface DeleteButtonProps {
    id: number;
    handleDelete: DeleteTodoHandler;
}

type SubmitHandler = () => void;

type DeleteTodoHandler = (id: number) => Promise<void>;

type HandleAddTodo = (todoItem: TodoList) => Promise<void>;

type ToggleModal = () => void;

type FetchTodos = () => Promise<TodoList[]>;

type AddTodo = (todoList: TodoList) => Promise<void>;

type DeleteTodo = (id: number) => Promise<void>;

type LoadTodos = () => Promise<void>;
