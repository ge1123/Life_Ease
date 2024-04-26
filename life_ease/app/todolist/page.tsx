"use client"; // This is a client component 👈🏽
import React, { useState, useEffect, FormEvent } from 'react';
import AddItem from '@/todolist/additem';

function TodoList() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (): void => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl">
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
  );
};

export default TodoList;