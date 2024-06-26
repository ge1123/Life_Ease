import { CreateTodoAsync, RemoveTodoAsync, ModifyTodoAsync, FetchTodosAsync, TodoList } from '@/todolist/types/index.type';

export interface TodoContextType {
    todos: TodoList[];
    isLoading: boolean;
    addTodo: CreateTodoAsync;
    deleteTodo: RemoveTodoAsync;
    updateTodo: ModifyTodoAsync;
    loadTodos: FetchTodosAsync;
}