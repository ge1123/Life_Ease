"use client"; // This is a client component 👈🏽
import React, { useState, useEffect, FormEvent } from 'react';
import AddItem from '@/todolist/additem';
// import './style.css';

function TodoList() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (): void => {
    setShowModal(!showModal);
  };

  return (
    <div className="relative">
      <h1>Todo List</h1>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
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