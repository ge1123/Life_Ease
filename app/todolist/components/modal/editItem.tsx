import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/todolist/styles/index.scss';
import React from 'react';
import EditCloseButton from '@/todolist/components/button/editCloseButton';
import UpdateSubmitButton from '@/todolist/components/button/updateSubmitButton';
import EditForm from '@/todolist/components/form/editForm';
import useEditTodoState from '@/todolist/hooks/useEditTodo';
import { EditItemProps } from '@/todolist/types/index.type';

const EditItem: React.FC<EditItemProps> = ({ toggleModalVisibility, id }) => {

    const {
        todo,
        handleSubmit,
        handleChange,
        formatDate
    } = useEditTodoState(toggleModalVisibility, id);

    return (
        <div className="editItem__background">
            <div className="editItem__container">
                <h1
                    className="editItem__header">
                    編輯
                </h1>
                <EditCloseButton toggleModalOpenStatus={toggleModalVisibility} />

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