import React from 'react';
import EditItem from '@/todolist/components/modal/editItem';
import useModal from '@/todolist/hooks/useModal';
import '@/todolist/styles/index.scss';
import { EditItemModalProps } from '@/todolist/types/index.type';
import EditButton from '@/todolist/components/button/editButton';

const EditItemModal: React.FC<EditItemModalProps> = ({ id }) => {

    const {
        showModal,
        toggleModal
    } = useModal();

    return (
        <div>
            <EditButton toggleModal={toggleModal} />

            {
                showModal &&
                <EditItem
                    toggleModal={toggleModal}
                    id={id}
                />
            }
        </div>
    )
}

export default EditItemModal;