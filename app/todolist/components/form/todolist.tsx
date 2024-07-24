"use client"; // This is a client component 👈🏽

import '@/todolist/styles/index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import MainLayout from '@/_layout/components/mainLayout';
import SearchBox from '@/todolist/components/box/searchBox';
import SearchButton from '@/todolist/components/button/searchButton';
import TodoItem from '@/todolist/components/list/todoItem';
import AddItemModal from '@/todolist/components/modal/addTodoModal';
import { TodoProvider } from '@/todolist/context/todoContext';
import useTodoState from '@/todolist/hooks/useTodo';


const TodoList: React.FC = () => {

  const {
    isLoading,
    searchKeyword,
    handleSearchChange,
    handleSearch,
  } = useTodoState();

  return (
    <>
      <div className="todoList__container">
        <div className="todoList__header">
          <h1 className="todoList__title">
            待辦事項
          </h1>
          <AddItemModal/>
        </div>

        <div className="todoList__search-Container">
          <SearchBox searchKeyword={searchKeyword} handleSearchChange={handleSearchChange} />
          <SearchButton handleSearch={handleSearch} />
        </div>
      </div>

      <div className="todoList__item-Container">
        {
          isLoading
            ? <TodoItem />
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
