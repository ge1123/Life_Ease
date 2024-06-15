import DeleteButton from '@/todolist/components/button/deleteButton';
import UpdateButton from '@/todolist/components/button/updateButton';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/todolist/styles/index.scss';

interface TodoItemProps {
  loading: boolean;
  todoList: TodoList[];
  deleteTodo: DeleteTodoAsync;
  updateTodo: UpdateTodoAsync;
}

const TodoItem: React.FC<TodoItemProps> = ({ loading, todoList, deleteTodo, updateTodo }) => {

  const Item = (
    <div>
      {todoList.map(todo => (
        <div key={todo.id} className="todoItem__container">
          <span className="todoItem__title">{todo.title}</span>
          <div className="todoItem__button-container">
            <UpdateButton
              id={todo.id}
              updateTodo={updateTodo}
            />
            <DeleteButton
              id={todo.id}
              deleteTodo={deleteTodo}
            />
          </div>
        </div>
      ))}

    </div>
  )

  return (
    <div>
      {
        loading
          ? <p>Loading...</p>
          : Item
      }
    </div>
  );
}


export default TodoItem;