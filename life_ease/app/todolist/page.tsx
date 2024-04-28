"use client"; // This is a client component 👈🏽

import React, { useState } from 'react';
import AddItem from '@/todolist/components/addItem';
import TodoItem from '@/todolist/components/todoItem';
import useTodos from '@/todolist/services/api';
import '@fortawesome/fontawesome-free/css/all.min.css';

function TodoList(): JSX.Element {
  const { todos, loading, addTodo, deleteTodo } = useTodos();

  // 顯示/隱藏 新增事項視窗 
  const [showModal, setShowModal] = useState(false);

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
            addTodo={addTodo}
          />
        }
      </div>
      <div className="container mx-auto px-4 max-w-4xl">
        <TodoItem
          todos={todos}
          loading={loading}
          handleDelete={deleteTodo}
        />
      </div>
    </>
  );
};

export default TodoList;