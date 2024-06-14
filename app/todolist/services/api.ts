import { deleteDataAsync, fetchPagedDataAsync, createDataAsync, updateDataAsync } from '@/_utils/apiClient';
import { useState, useEffect } from 'react';
import {BASE_URLS} from '@/_utils/config';

const url: string = BASE_URLS.TODO;

type UseTodoStateHook = () => UseTodoState;

const useTodoState: UseTodoStateHook = (): UseTodoState => {

    // 待辦事項資料
    const [todos, setTodos] = useState<TodoList[]>([]);

    // 是否載入
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        loadTodosAsync();
    }, []);

    const loadTodosAsync: LoadTodosAsync = async (params: TodoQueryParams = {}) => {
        const queryParams: URLSearchParams = new URLSearchParams();

        // 將參數添加到查詢字串中
        Object.keys(params).forEach(key => {
            const value = params[key as keyof TodoQueryParams];
            if (value != null) { // 檢查 undefined 和 null
                queryParams.append(key, value.toString());
            }
        });

        const query: string = queryParams.toString();
        const urlWithParams: string = query ? `${url}?${query}` : url;

        const result: TodoList[] = await fetchPagedDataAsync(urlWithParams);
        setTodos(result);
        setLoading(false);
    }


    const addTodoAsync: CreateTodoAsync = async (todoList) => {

        await createDataAsync(url, {
            ...todoList,
            dueDate: todoList.dueDate.toISOString()
        })
        await loadTodosAsync();
    }

    const deleteTodoAsync: DeleteTodoAsync = async (id) => {

        await deleteDataAsync(`${url}/${id}`)
        await loadTodosAsync();
    }

    const updateTodoAsync: UpdateTodoAsync = async (todoList) => {

        await updateDataAsync(`${url}/${todoList.id}`, todoList)
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