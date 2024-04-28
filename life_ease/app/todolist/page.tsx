"use client"; // This is a client component 👈🏽

import React, { useState, useEffect, FormEvent } from 'react';
import AddItem from '@/todolist/components/addItem';
import TodoItem from '@/todolist/components/todoItem';
import { fetchTodos, addTodo, deleteTodo } from '@/todolist/services/api';
import '@fortawesome/fontawesome-free/css/all.min.css';

function TodoList(): JSX.Element {

  // 顯示/隱藏 新增事項視窗 
  const [showModal, setShowModal] = useState(false);

  // 待辦事項資料
  const [todos, setTodos] = useState<TodoList[]>([]);

  // 是否載入
  const [loading, setLoading] = useState<boolean>(true);

  useEffect((): void => {
    loadTodos();
  }, []);

  // 取得待辦事項
  const loadTodos: LoadTodos = async (): Promise<void> => {
    const result: TodoList[] = await fetchTodos();
    console.log(result)
    setTodos(result);
    setLoading(false);
  }

  // 新增事項
  const submitTodoAndUpdateView = async (todos: TodoList): Promise<void> => {
    await addTodo(todos);
    await loadTodos();
  }

  // 刪除事項
  const deleteTodoAndUpdateView = async (id: number): Promise<void> => {
    await deleteTodo(id);
    await loadTodos();
  }

  // 開啟/關閉 新增事項視窗觸發器
  const toggleModal: ToggleModal = (): void => {
    setShowModal(!showModal);
  };



  return (
    <>
      <div className="flex items-center justify-center space-x-4">
        <h1
          className="text-4xl mt-4">
          待辦事項
        </h1>
        <button
          className="bg-blue-600 text-white font-bold py-1 px-2 rounded mt-4"
          onClick={toggleModal}>
          <i className="fas fa-plus"></i> {/* 新增 + */}
        </button>
        <input
          type="text"
          placeholder="請輸入內容"
        />
        {
          showModal &&
          <AddItem
            toggleModal={toggleModal}
            addTodo={submitTodoAndUpdateView}
          />
        }
      </div>
      <div className="container mx-auto px-4 max-w-4xl">
        <TodoItem
          todos={todos}
          loading={loading}
          handleDelete={deleteTodoAndUpdateView}
        />
      </div>
    </>
  );
};

export default TodoList;