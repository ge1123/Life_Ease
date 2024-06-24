import { deleteDataAsync, fetchPagedDataAsync, createDataAsync, updateDataAsync } from '@/_utils/apiClient';
import { BASE_URLS } from '@/_utils/config';
import { TodoList, TodoQueryParams, RemoveTodoAsync, ModifyTodoAsync, CreateTodoAsync, FetchTodosAsync, todoListSchema } from '@/todolist/types/index.type';

const url: string = BASE_URLS.TODO;

export const fetchTodosAsync: FetchTodosAsync = async (params: TodoQueryParams = {}) => {
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
    const rawData: TodoList[] = await fetchPagedDataAsync<TodoList>(urlWithParams);
    return rawData.map(todo => todoListSchema.parse(todo));

}

export const createTodoAsync: CreateTodoAsync = async (todoList) => {

    await createDataAsync(url, {
        ...todoList,
        dueDate: todoList.dueDate.toISOString()
    })
    await fetchTodosAsync();
}

export const removeTodoAsync: RemoveTodoAsync = async (id) => {

    await deleteDataAsync(`${url}/${id}`)
    await fetchTodosAsync();
}

export const modifyTodoAsync: ModifyTodoAsync = async (todoList) => {
    await updateDataAsync(`${url}/${todoList.id}`, todoList);
    await fetchTodosAsync();
}
