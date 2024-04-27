import { useEffect, useState } from 'react';
import DeleteButton from '@/todolist/deleteButton';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function TodoItem({loading, todos}: TodoItemProps) {

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {todos.map(todo => (
            <div key={todo.id} className="bg-gray-100 p-4 my-2 rounded shadow flex items-center">
              <span className="font-semibold">{todo.title}</span>
              <div className="ml-auto flex gap-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <i className="fas fa-edit align-middle"></i>
                </button>
                <DeleteButton id={todo.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
