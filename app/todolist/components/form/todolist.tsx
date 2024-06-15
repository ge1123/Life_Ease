"use client"; // This is a client component 👈🏽

import React from 'react';
import AddItem from '@/todolist/components/modal/addItem';
import TodoItem from '@/todolist/components/list/todoItem';
import useTodo from '@/todolist/hooks/useTodo';
import MainLayout from '@/_layout/components/mainLayout';
import '@/todolist/styles/index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

type TodoComponent = () => React.JSX.Element;

const TodoList: TodoComponent = () => {

  const {
    todos,
    loading,
    searchKeyword,
    showModal,
    addTodo,
    deleteTodo,
    updateTodo,
    handleSearchChange,
    handleSearch,
    toggleModal
  } = useTodo();

  return (
    <MainLayout>
      <div className="todoList__container">
        <div className="todoList__header">
          <h1 className="todoList__title">
            待辦事項
          </h1>
          <button
            className="todoList__addButton"
            onClick={toggleModal}>
            <i className="fas fa-plus"></i> {/* 新增 + */}
          </button>
        </div>
        {
          showModal &&
          <AddItem
            toggleModal={toggleModal}
            addTodo={addTodo}
          />
        }
        <div className="todoList__search-Container">
          <input
            type="text"
            className="todoList__searchBox"
            placeholder="請輸入關鍵字進行搜尋"
            value={searchKeyword}
            onChange={handleSearchChange} // 當輸入框值變化時觸發更新狀態的函數
          />
          <button
            className="todoList__searchButton"
            onClick={handleSearch}>
            <i className="fas fa-search"></i> {/* 搜尋 + */}
          </button>
        </div>
      </div>
      <div className="todoList__itemContainer">
        <TodoItem
          todoList={todos}
          loading={loading}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      </div>
    </MainLayout>
  );
};

export default TodoList;