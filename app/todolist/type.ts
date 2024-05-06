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

interface TodoItemProps {
    loading: boolean;
    todoList: TodoList[];
    handleDelete: DeleteTodo;
    handleUpdate: UpdateTodo;
}

interface InputFieldProps {
    label: string;
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface AddItemProps {
    toggleModal: () => void;
    handleAdd: HandleAddTodo;
}

interface UpdateItemProps {
    toggleModal: () => void;
    handleUpdate: UpdateTodo;
    id: number;
}

interface DeleteButtonProps {
    id: number;
    handleDelete: DeleteTodo;
}

interface UpdateButtonProps {
    id: number;
    handleUpdate: UpdateTodo;
}

type SubmitHandler = () => void;

type HandleAddTodo = (todoItem: TodoList) => Promise<void>;

type ToggleModal = () => void;

type CreateTodo = (todoList: TodoList) => Promise<void>;

type DeleteTodo = (id: number) => Promise<void>;

type UpdateTodo = (todoList: TodoList) => Promise<void>;

type LoadTodos = (params?: TodoQueryParams) => Promise<void>;
