import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/todolist/styles/index.scss';
import DeleteButton from '@/todolist/components/button/deleteButton';
import EditItemModal from '@/todolist/components/modal/editItemModal';
import { useTodoContext } from '@/todolist/context/todoContext';
import { TodoItemProps } from '@/todolist/types/index.type';


const TodoItem: React.FC<TodoItemProps> = () => {

  const todoContext = useTodoContext();

  return (
    <div>
      {todoContext.todos.map(todo =>
        <div key={todo.id} className="todoItem__container">
          <span className="todoItem__title">{todo.title}</span>
          <div className="todoItem__button-container">
            <EditItemModal
              id={todo.id}
            />

            <DeleteButton
              id={todo.id}
            />
          </div>
        </div>
      )}

    </div>
  )
}


export default TodoItem;