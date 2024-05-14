import { deleteData, fetchPagedData, postData, updateData } from '@/utils/api';
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

    const loadTodos: LoadTodos = async (params: TodoQueryParams = {}): Promise<void> => {
        const queryParams = new URLSearchParams();
    
        // 將參數添加到查詢字串中
        Object.keys(params).forEach(key => {
            const value = params[key as keyof TodoQueryParams];
            if (value != null) { // 檢查 undefined 和 null
                queryParams.append(key, value.toString());
            }
        });
    
        const query = queryParams.toString();
        const urlWithParams = query ? `${url}?${query}` : url;
    
        const config: RequestInit = {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        };
    
        const result: TodoList[] = await fetchPagedData(urlWithParams, config);
        setTodos(result);
        setLoading(false);
    }
    

    const addTodo: CreateTodo = async (todoList: TodoList): Promise<void> => {
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

    const updateTodo: UpdateTodo = async (todoList: TodoList): Promise<void> => {
        const config: RequestInit = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...todoList
            })
        };
        await updateData(`${url}/${todoList.id}`, todoList, config)
        await loadTodos();
    }

    return { todos, loading, addTodo, deleteTodo, updateTodo, loadTodos };
};

export default useTodos;