import { useEffect, useState } from 'react';
import DeleteButton from '@/todolist/deleteButton';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface TodoItem {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  dueTime: string | null;
}

interface ApiResponse {
  code: number;
  status: string;
  data: {
    items: TodoItem[];
    total: number;
  };
}

export default function TodoItem() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
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

    fetchTodos().catch(error => {
      console.error('Error fetching todos:', error);
      setLoading(false);
    });
  }, []);


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
