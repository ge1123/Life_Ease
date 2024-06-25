import React from 'react';
import useEditTodo from '@/todolist/hooks/useEditTodoState';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/todolist/styles/index.scss';
import { EditItemProps, TodoList } from '@/todolist/types/index.type';
import EditCloseButton from '@/todolist/components/button/editCloseButton';
import UpdateSubmitButton from '@/todolist/components/button/updateSubmitButton';
import EditForm from '@/todolist/components/form/editForm';
import { useTodoContext } from '@/todolist/context/todoContext';

const EditItem: React.FC<EditItemProps> = ({ toggleModal, id }) => {

    const todoContext = useTodoContext();
    const item: TodoList | undefined = todoContext.todos.find(todo => todo.id === id);

    const defaultItem: TodoList = {
        id: -1,
        title: '',
        description: '',
        isCompleted: false,
        dueDate: new Date(),
    };

    const {
        todo,
        handleSubmit,
        handleChange,
        formatDate
    } = useEditTodo(toggleModal, todoContext.updateTodo, item || defaultItem);

    return (
        <div className="editItem__background">
            <div className="editItem__container">
                <h1
                    className="editItem__header">
                    編輯
                </h1>
                <EditCloseButton toggleModalOpenStatus={toggleModal} />

                <div
                    className="editItem__form-container">
                    <EditForm todo={todo} handleChange={handleChange} formatDate={formatDate} />
                </div>
                <UpdateSubmitButton handleSubmit={handleSubmit} />
            </div>
        </div>
    )
}


export default EditItem;