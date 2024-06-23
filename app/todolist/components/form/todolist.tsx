"use client"; // This is a client component 👈🏽

import React from 'react';
import TodoItem from '@/todolist/components/list/todoItem';
import useTodo from '@/todolist/hooks/useTodo';
import MainLayout from '@/_layout/components/mainLayout';
import '@/todolist/styles/index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AddButton from '@/todolist/components/button/addButton';
import SearchButton from '@/todolist/components/button/searchButton';
import SearchBox from '@/todolist/components/box/searchBox';
import AddItemModal from '@/todolist/components/modal/addTodoModal';


const TodoList: React.FC = () => {

  const {
    todos,
    loading,
    searchKeyword,
    isModalOpen,
    addTodo,
    deleteTodo,
    updateTodo,
    handleSearchChange,
    handleSearch,
    toggleModalOpenStatus
  } = useTodo();

  return (
    <MainLayout>

      <AddItemModal isModalOpen={isModalOpen} toggleModalOpenStatus={toggleModalOpenStatus} addTodo={addTodo} />

      <div className="todoList__container">
        <div className="todoList__header">
          <h1 className="todoList__title">
            待辦事項
          </h1>
          <AddButton toggleModalOpenStatus={toggleModalOpenStatus} />
        </div>

        <div className="todoList__search-Container">
          <SearchBox searchKeyword={searchKeyword} handleSearchChange={handleSearchChange} />
          <SearchButton handleSearch={handleSearch} />
        </div>
      </div>

      <div className="todoList__item-Container">
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