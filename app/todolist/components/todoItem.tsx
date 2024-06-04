import DeleteButton from '@/todolist/components/deleteButton';
import UpdateButton from '@/todolist/components/updateButton';
import '@fortawesome/fontawesome-free/css/all.min.css';

type TodoItemProps = {
  loading: boolean;
  todoList: TodoList[];
  handleDelete: DeleteTodoAsync;
  handleUpdate: UpdateTodoAsync;
}

const TodoItem: React.FC<TodoItemProps> = ({ loading, todoList, handleDelete, handleUpdate }) => {

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {todoList.map(todo => (
            <div key={todo.id} className="bg-gray-100 p-4 my-2 rounded shadow flex items-center">
              <span className="font-semibold">{todo.title}</span>
              <div className="ml-auto flex gap-2">
                <UpdateButton
                  id={todo.id}
                  handleUpdate={handleUpdate}
                />
                <DeleteButton
                  id={todo.id}
                  handleDelete={handleDelete}
                />
              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}


export default TodoItem;