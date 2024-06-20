import React from 'react';
import EditItem from '@/todolist/components/modal/editItem';
import useModal from '@/todolist/hooks/useModal';
import '@/todolist/styles/index.scss';

interface UpdateButtonProps {
    id: number;
    updateTodo: UpdateTodoAsync;
}

interface ShowEditWindowProps {
    showModal: boolean,
    id: number,
    toggleModal: () => void,
    updateTodo: UpdateTodoAsync
}

const ShowEditWindow: React.FC<ShowEditWindowProps> = ({ showModal, id, toggleModal, updateTodo }) => {
    return (
        <>
            {
                showModal &&
                <EditItem
                    id={id}
                    toggleModal={toggleModal}
                    updateTodo={updateTodo}
                />
            }
        </>
    )
}

const UpdateButton: React.FC<UpdateButtonProps> = ({ id, updateTodo }) => {

    const {
        showModal,
        toggleModal
    } = useModal();

    return (
        <div>
            <ShowEditWindow showModal={showModal} id={id} toggleModal={toggleModal} updateTodo={updateTodo} />

            <button
                className="updateButton__button"
                onClick={toggleModal}
            >
                <i className="fa fa-edit align-middle"></i>
            </button>
        </div>
    )
}

export default UpdateButton;