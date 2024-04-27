"use client"; // This is a client component 👈🏽
import React, { useState, useEffect, FormEvent } from 'react';
import AddItem from '@/todolist/addItem';
import TodoItem from '@/todolist/todoItem';

function TodoList() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (): void => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="flex items-center justify-center space-x-4">
        <h1 className="text-4xl mt-4">
          Todo List
        </h1>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={toggleModal}>
          +
        </button>
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