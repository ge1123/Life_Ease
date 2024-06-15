import React from 'react';
import EditItem from '@/todolist/components/modal/editItem';
import useModal from '@/todolist/hooks/useModal';
import '@/todolist/styles/index.scss';

interface UpdateButtonProps {
    id: number;
    updateTodo: UpdateTodoAsync;
}

const UpdateButton: React.FC<UpdateButtonProps> = ({ id, updateTodo }) => {

    const {
        showModal,
        toggleModal
    } = useModal();

    return (
        <div>
            <button
                className="updateButton__button"
                onClick={toggleModal}
            >
                <i className="fa fa-edit align-middle"></i>
            </button>
            {
                showModal &&
                <EditItem
                    id={id}
                    toggleModal={toggleModal}
                    updateTodo={updateTodo}
                />
            }
        </div>
    )
}


export default UpdateButton;