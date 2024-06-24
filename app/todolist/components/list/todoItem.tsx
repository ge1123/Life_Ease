import DeleteButton from '@/todolist/components/button/deleteButton';
import EditItemModal from '@/todolist/components/modal/editItemModal';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/todolist/styles/index.scss';
import { TodoItemProps } from '@/todolist/types/index.type';


const TodoItem: React.FC<TodoItemProps> = ({ loading, todoList, deleteTodo, updateTodo }) => {

  const Item = (
    <div>
      {todoList.map(todo =>
        <div key={todo.id} className="todoItem__container">
          <span className="todoItem__title">{todo.title}</span>
          <div className="todoItem__button-container">
            <EditItemModal
              updateTodo={updateTodo}
              todo={todo}
            />
            <DeleteButton
              id={todo.id}
              deleteTodo={deleteTodo}
            />
          </div>
        </div>
      )}

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