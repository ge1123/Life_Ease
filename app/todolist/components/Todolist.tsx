"use client"; // This is a client component 👈🏽

import React, { useState } from 'react';
import AddItem from '@/todolist/components/addItem';
import TodoItem from '@/todolist/components/todoItem';
import useTodoState from '@/todolist/services/api';
import MainLayout from '@/layout/mainLayout';
import '@fortawesome/fontawesome-free/css/all.min.css';

type HandleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => void;
type HandleSearch = () => void;
type TodoComponent = () => React.JSX.Element;

const TodoList: TodoComponent = () => {
  const { todos, loading, addTodoAsync: addTodo, deleteTodoAsync: deleteTodo, updateTodoAsync: updateTodo, loadTodosAsync: loadTodos } = useTodoState();

  // 用於存儲搜尋關鍵字的狀態
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  // 當搜尋輸入框的值發生變化時更新狀態
  const handleSearchChange: HandleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearch: HandleSearch = () => {
    loadTodos({ title: searchKeyword }); // 在按下搜尋按鈕時重新加載待辦事項列表
  };


  // 顯示/隱藏 新增事項視窗 
  const [showModal, setShowModal] = useState(false);

  // 開啟/關閉 新增事項視窗觸發器
  const toggleModal: ToggleModal = (): void => {
    setShowModal(!showModal);
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center justify-center space-x-4 mt-4">
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
        <div className="flex items-center justify-center space-x-4 mt-4">
          <input
            type="text"
            className="p-2 rounded border border-gray-300 flex-1"
            placeholder="請輸入關鍵字進行搜尋"
            value={searchKeyword}
            onChange={handleSearchChange} // 當輸入框值變化時觸發更新狀態的函數
          />
          <button
            className="bg-blue-600 text-white font-bold py-1 px-2 rounded"
            onClick={handleSearch}>
            <i className="fas fa-search"></i> {/* 搜尋 + */}
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-xl">
        <TodoItem
          todoList={todos}
          loading={loading}
          handleDelete={deleteTodo}
          handleUpdate={updateTodo}
        />
      </div>
    </MainLayout>
  );
};

export default TodoList;