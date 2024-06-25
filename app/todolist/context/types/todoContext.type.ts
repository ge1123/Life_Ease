import { AddTodoAsync, DeleteTodoAsync, UpdateTodoAsync, LoadTodosAsync, TodoList } from '@/todolist/types/index.type';

export interface TodoContextType {
    todos: TodoList[];
    isLoading: boolean;
    addTodo: AddTodoAsync;
    deleteTodo: DeleteTodoAsync;
    updateTodo: UpdateTodoAsync;
    loadTodos: LoadTodosAsync;
}