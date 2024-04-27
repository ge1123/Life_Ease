"use client"; // This is a client component 👈🏽
import React, { useState, useEffect, FormEvent } from 'react';
import AddItem from '@/todolist/addItem';
import TodoItem from '@/todolist/todoItem';
import '@fortawesome/fontawesome-free/css/all.min.css';

function TodoList() {

  // 顯示/隱藏 新增事項視窗 
  const [showModal, setShowModal] = useState(false);

  // 待辦事項資料
  const [todos, setTodos] = useState<TodoItem[]>([]);

  // 是否載入
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch('https://localhost:7082/api/lifemanage/todo', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const result: ApiResponse = await response.json();
    setTodos(result.data.items);
    setLoading(false);
  };



  async function handleAddTodo(todoItem: TodoList) {
    try {
      const response = await fetch(`https://localhost:7082/api/lifemanage/todo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...todoItem,
          dueDate: todoItem.dueDate.toISOString()
        })
      });

      if (response.ok) {
        console.log('Add success');
        fetchTodos();  // 重新获取待办事项列表
      } else {
        throw new Error('Failed to add');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // 開啟/關閉 新增事項視窗觸發器
  const toggleModal = (): void => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="flex items-center justify-center space-x-4">
        <h1
          className="text-4xl mt-4">
          待辦事項
        </h1>
        <button
          className="bg-blue-600 text-white font-bold py-1 px-2 rounded mt-4"
          onClick={toggleModal}>
          <i className="fas fa-plus"></i> {/* 新增 + */}
        </button>
        <input
          type="text"
          placeholder="請輸入內容"
        />
        {
          showModal &&
          <AddItem
            toggleModal={toggleModal}
            addTodo={handleAddTodo}
          />
        }
      </div>
      <div className="container mx-auto px-4 max-w-4xl">
        <TodoItem
          todos={todos}
          loading={loading}
        />
      </div>
    </>
  );
};

export default TodoList;