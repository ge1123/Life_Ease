import { useState, useEffect } from 'react';
import { fetchTodosAsync, createTodoAsync, removeTodoAsync, modifyTodoAsync } from '@/todolist/services/api';
import {
    TodoList,
    TodoQueryParams,
    DeleteTodoAsync,
    UpdateTodoAsync,
    AddTodoAsync,
    LoadTodosAsync,
    UseTodoState,
    UseTodoStateHook
} from '@/todolist/types/index.type';


const useTodoState: UseTodoStateHook = (): UseTodoState => {

    // 待辦事項資料
    const [todos, setTodos] = useState<TodoList[]>([]);

    // 是否載入
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        loadTodosAsync();
    }, []);

    const loadTodosAsync: LoadTodosAsync = async (params: TodoQueryParams = {}) => {
        const result = await fetchTodosAsync(params);
        setTodos(result);
        setLoading(false);
    }

    const addTodoAsync: AddTodoAsync = async (todoList) => {
        await createTodoAsync(todoList);
        await loadTodosAsync();
    }

    const deleteTodoAsync: DeleteTodoAsync = async (id) => {
        await removeTodoAsync(id);
        await loadTodosAsync();
    }

    const updateTodoAsync: UpdateTodoAsync = async (todoList) => {
        await modifyTodoAsync(todoList);
        await loadTodosAsync();
    }

    return {
        todos,
        loading,
        addTodoAsync,
        deleteTodoAsync,
        updateTodoAsync,
        loadTodosAsync
    };
};

export default useTodoState;