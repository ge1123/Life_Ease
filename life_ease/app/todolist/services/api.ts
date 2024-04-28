import { deleteData, fetchData, postData } from '@/utils/api';
import { useState, useEffect } from 'react';

const url: string = "https://localhost:7082/api/lifemanage/todo";


const fetchTodos: FetchTodos = async (): Promise<TodoList[]> => {

    const config: RequestInit = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    };

    const result: TodoList[] = await fetchData(url, config)
    return result;
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
}

const deleteTodo: DeleteTodo = async (id: number): Promise<void> => {
    const config: RequestInit = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    await deleteData(`${url}/${id}`, config)
}

export { fetchTodos, addTodo, deleteTodo }