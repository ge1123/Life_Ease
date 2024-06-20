"use client"; // This is a client component 👈🏽

import React from 'react';
import AddItem from '@/todolist/components/modal/addItem';
import TodoItem from '@/todolist/components/list/todoItem';
import useTodo from '@/todolist/hooks/useTodo';
import MainLayout from '@/_layout/components/mainLayout';
import '@/todolist/styles/index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

type TodoComponent = () => React.JSX.Element;

interface AddButtonProps {
  toggleModal: () => void;
};

interface SearchBoxProps {
  searchKeyword: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface SearchButtonProps {
  handleSearch: () => void;
}

interface ShowAddWindowProps  {
  showModal: boolean;
  toggleModal: () => void;
  addTodo: CreateTodoAsync;
}

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

  const AddButton: React.FC<AddButtonProps> = ({ toggleModal }) => {
    return (
      <button
        className="todoList__addButton"
        onClick={toggleModal}>
        <i className="fas fa-plus"></i> {/* 新增 + */}
      </button>
    )
  }

  const SearchBox: React.FC<SearchBoxProps> = ({ searchKeyword, handleSearchChange }) => {
    return (
      <input
        type="text"
        className="todoList__searchBox"
        placeholder="請輸入關鍵字進行搜尋"
        value={searchKeyword}
        onChange={handleSearchChange} // 當輸入框值變化時觸發更新狀態的函數
      />
    )
  }

  const SearchButton: React.FC<SearchButtonProps> = ({ handleSearch }) => {
    return (
      <button
        className="todoList__searchButton"
        onClick={handleSearch}>
        <i className="fas fa-search"></i> {/* 搜尋 + */}
      </button>
    )
  }

  const ShowAddWindow: React.FC<ShowAddWindowProps> = ({ showModal, toggleModal, addTodo }) => {
    return (
      <>
        {
          showModal &&
          <AddItem
            toggleModal={toggleModal}
            addTodo={addTodo}
          />
        }
      </>
    )
  }

  return (
    <MainLayout>
      <ShowAddWindow showModal={showModal} toggleModal={toggleModal} addTodo={addTodo} />

      <div className="todoList__container">
        <div className="todoList__header">
          <h1 className="todoList__title">
            待辦事項
          </h1>
          <AddButton toggleModal={toggleModal} />
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