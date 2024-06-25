"use client"; // This is a client component 👈🏽

import '@/todolist/styles/index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import TodoItem from '@/todolist/components/list/todoItem';
import useTodo from '@/todolist/hooks/useTodo';
import MainLayout from '@/_layout/components/mainLayout';
import SearchButton from '@/todolist/components/button/searchButton';
import SearchBox from '@/todolist/components/box/searchBox';
import AddItemModal from '@/todolist/components/modal/addTodoModal';
import { TodoProvider, useTodoContext } from '@/todolist/context/todoContext';


const TodoList: React.FC = () => {

  const todoContext = useTodoContext();

  const {
    searchKeyword,
    isModalOpen,
    handleSearchChange,
    handleSearch,
    toggleModalOpenStatus
  } = useTodo(todoContext.loadTodos);

  return (
    <>
      <div className="todoList__container">
        <div className="todoList__header">
          <h1 className="todoList__title">
            待辦事項
          </h1>
          <AddItemModal isModalOpen={isModalOpen} toggleModalOpenStatus={toggleModalOpenStatus} />
        </div>

        <div className="todoList__search-Container">
          <SearchBox searchKeyword={searchKeyword} handleSearchChange={handleSearchChange} />
          <SearchButton handleSearch={handleSearch} />
        </div>
      </div>

      <div className="todoList__item-Container">
        {
          todoContext.isLoading
          ? <TodoItem/>
          : <p>Loading...</p>
        }
      </div>
    </>
  );
};


const Index = () => {
  return (
    <MainLayout>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </MainLayout>
  );

}

export default Index;
