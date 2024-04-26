"use client"; // This is a client component 👈🏽
import { useState } from 'react';
import TodoItem from '@/todo/todoItem';

async function getTodoList(): Promise<any | null> {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();

    return {
        props: {
            data,
        },
    };

}


const Todo = (): JSX.Element => {
    // 新的代辦事項
    const [newTodoName, setNewTodoName] = useState<string>("");

    const [todoList, setTodoList] = useState<Todo[] | null>(null);

    const creatTodoHandler = () => {
        if (newTodoName.trim() === "") return; // 如果名稱為空，不添加新的代辦事項

        const newTodo: Todo = {
            id: todoList !== null ? todoList.length + 1 : 1,
            name: newTodoName,
            // isDone: false
        };

        if (todoList === null) {
            setTodoList([newTodo]);
        } else {
            setTodoList([...todoList, newTodo]);
        }

        setNewTodoName(""); // 清空輸入框
    }

    return (
        <>
            <div>
                <h1>TodoList</h1>
                <input
                    type="text"
                    value={newTodoName}
                    onChange={(e) => setNewTodoName(e.target.value)}
                />
                <button onClick={creatTodoHandler}>+</button>
            </div>
            <TodoItem todoList={todoList} />
        </>
    );
};

export default Todo;
