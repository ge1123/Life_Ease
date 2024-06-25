import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { fetchTodosAsync, createTodoAsync, removeTodoAsync, modifyTodoAsync } from '@/todolist/services/api';
import { TodoList, TodoQueryParams, TodoContextType, DeleteTodoAsync, UpdateTodoAsync, AddTodoAsync, LoadTodosAsync } from '@/todolist/types/index.type';

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
    // 待辦事項資料
    const [todos, setTodos] = useState<TodoList[]>([]);

    // 是否載入
    const [isLoading, setIsLoading] = useState<boolean>(false);


    const loadTodos: LoadTodosAsync = async (params: TodoQueryParams = {}) => {
        const result = await fetchTodosAsync(params);
        setTodos(result);
        setIsLoading(true);
    }

    const addTodo: AddTodoAsync = async (todoList) => {
        await createTodoAsync(todoList);
        await loadTodos();
    }

    const deleteTodo: DeleteTodoAsync = async (id) => {
        await removeTodoAsync(id);
        await loadTodos();
    }

    const updateTodo: UpdateTodoAsync = async (todoList) => {
        await modifyTodoAsync(todoList);
        await loadTodos();
    }

    useEffect(() => {
        loadTodos();
    }, []);

    return (
        <TodoContext.Provider
            value={{
                addTodo,
                updateTodo,
                deleteTodo,
                loadTodos,
                todos,
                isLoading
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export const useTodoContext = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('useTodoContext must be used within a TodoProvider');
    }
    return context;
}


