"use client"; // This is a client component 👈🏽

import React, { useState } from 'react';
import AddItem from '@/todolist/components/AddItem';
import TodoItem from '@/todolist/components/TodoItem';
import useTodos from '@/todolist/services/api';
import '@fortawesome/fontawesome-free/css/all.min.css';

function TodoList(): JSX.Element {
  const { todos, loading, addTodo, deleteTodo, updateTodo } = useTodos();

  // 顯示/隱藏 新增事項視窗 
  const [showModal, setShowModal] = useState(false);

  // 開啟/關閉 新增事項視窗觸發器
  const toggleModal: ToggleModal = (): void => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <h1 className="text-4xl">
            待辦事項
          </h1>
          <button
            className="bg-blue-600 text-white font-bold py-1 px-2 rounded"
            onClick={toggleModal}>
            <i className="fas fa-plus"></i> {/* 新增 + */}
          </button>
        </div>
        {
          showModal &&
          <AddItem
            toggleModal={toggleModal}
            handleAdd={addTodo}
          />
        }
        <input
          type="text"
          className="mt-4 p-2 rounded border border-gray-300"
          placeholder="請輸入關鍵字進行搜尋"
        />
      </div>
      <div className="container mx-auto px-4 max-w-xl">
        <TodoItem
          handleSearch={todos}
          loading={loading}
          handleDelete={deleteTodo}
          handleUpdate={updateTodo}
        />
      </div>
      <input
        type="text"
        placeholder="請輸入內容"
      />
    </>
  );
};

export default TodoList;