import { deleteData, fetchData, postData } from '@/utils/api';
import { useState, useEffect } from 'react';

const url: string = "https://localhost:7082/api/lifemanage/todo";

const useTodos = () => {

    // 待辦事項資料
    const [todos, setTodos] = useState<TodoList[]>([]);

    // 是否載入
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        loadTodos();
    }, []);

    const loadTodos: LoadTodos = async (): Promise<void> => {
        const config: RequestInit = {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        };

        const result: TodoList[] = await fetchData(url, config)
        setTodos(result);
        setLoading(false);
    }

    const addTodo: AddTodo = async (todoList: TodoList): Promise<void> => {
        const config: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...todoList,
                dueDate: todoList.dueDate.toISOString()
            })
        };

        await postData(url, todoList, config)
        await loadTodos();
    }

    const deleteTodo: DeleteTodo = async (id: number): Promise<void> => {
        const config: RequestInit = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        };

        await deleteData(`${url}/${id}`, config)
        await loadTodos();
    }

    return { todos, loading, addTodo, deleteTodo };
};

export default useTodos;