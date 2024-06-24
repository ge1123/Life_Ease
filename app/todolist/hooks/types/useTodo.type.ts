import { TodoList, AddTodoAsync, DeleteTodoAsync, UpdateTodoAsync } from '@/todolist/types/index.type';


type UseTodo = {
    todos: TodoList[];
    loading: boolean;
    searchKeyword: string;
    isModalOpen: boolean;
    addTodo: AddTodoAsync;
    deleteTodo: DeleteTodoAsync;
    updateTodo: UpdateTodoAsync;
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSearch: () => void;
    toggleModalOpenStatus: () => void;
}

export type UseTodoHook = () => UseTodo;