import '@/todolist/styles/index.scss';
import React from 'react';
import EditItem from '@/todolist/components/modal/editItem';
import useModal from '@/todolist/hooks/useModal';
import { EditItemModalProps } from '@/todolist/types/index.type';
import EditButton from '@/todolist/components/button/editButton';

const EditItemModal: React.FC<EditItemModalProps> = ({ id }) => {

    const {
        isModalOpen,
        toggleModalVisibility
    } = useModal();

    return (
        <div>
            <EditButton toggleModal={toggleModalVisibility} />

            {
                isModalOpen &&
                <EditItem
                    toggleModalVisibility={toggleModalVisibility}
                    id={id}
                />
            }
        </div>
    )
}

export default EditItemModal;