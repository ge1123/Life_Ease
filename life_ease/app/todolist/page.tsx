"use client"; // This is a client component 👈🏽
import React, { useState, useEffect, FormEvent } from 'react';
import AddItem from '@/todolist/addItem';
import TodoItem from '@/todolist/todoItem';
import '@fortawesome/fontawesome-free/css/all.min.css';

function TodoList() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (): void => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="flex items-center justify-center space-x-4">
        <h1 className="text-4xl mt-4">
          待辦事項
        </h1>
        <button className="bg-blue-600 text-white font-bold py-1 px-2 rounded mt-4"
          onClick={toggleModal}>
          <i className="fas fa-plus"></i>
        </button>
        <input
          type="text"
          placeholder="請輸入內容"
        />
        {showModal && (
          <AddItem toggleModal={toggleModal} />
        )}
      </div>
      <div className="container mx-auto px-4 max-w-4xl">
        <TodoItem />
      </div>
    </>
  );
};

export default TodoList;