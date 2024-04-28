import { fetchData } from '@/utils/api';


const fetchTodos: FetchTodos = async (): Promise<TodoList[]> => {

    const url: string = "https://localhost:7082/api/lifemanage/todo";
    const config: RequestInit = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    };

    const result: TodoList[] = await fetchData(url, config)
    return result;
}

export { fetchTodos }