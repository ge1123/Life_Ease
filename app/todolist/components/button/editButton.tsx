import React from 'react';
import EditItem from '@/todolist/components/modal/editItem';
import useModal from '@/todolist/hooks/useModal';
import '@/todolist/styles/index.scss';
import {EditButtonProps, ShowEditWindowProps, SaveButtonProps} from '@/todolist/types/index.type';


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

const SaveButton: React.FC<SaveButtonProps> = ({ toggleModal }) => {
    return (
        <button
            className="updateButton__button"
            onClick={toggleModal}
        >
            <i className="fa fa-edit align-middle"></i>
        </button>
    )
}

const EditButton: React.FC<EditButtonProps> = ({ id, updateTodo }) => {

    const {
        showModal,
        toggleModal
    } = useModal();

    return (
        <div>
            <ShowEditWindow showModal={showModal} id={id} toggleModal={toggleModal} updateTodo={updateTodo} />

            <SaveButton toggleModal={toggleModal}/>
        </div>
    )
}

export default EditButton;