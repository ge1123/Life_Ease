import React, { useState, useEffect, FormEvent } from 'react';
import EditItem from '@/todolist/components/editItem';

interface UpdateButtonProps {
    id: number;
    handleUpdate: UpdateTodo;
}

const UpdateButton: React.FC<UpdateButtonProps> = ({ id, handleUpdate }) => {
    // 顯示/隱藏 編輯事項視窗 
    const [showModal, setShowModal] = useState(false);

    // 開啟/關閉 編輯事項視窗觸發器
    const toggleModal: ToggleModal = (): void => {
        setShowModal(!showModal);
    };
    return (
        <div>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center hover:bg-blue-700 transition-colors"
                onClick={toggleModal}
            >
                <i className="fas fa-edit align-middle"></i>
            </button>
            {
                showModal &&
                <EditItem
                    id={id}
                    toggleModal={toggleModal}
                    handleUpdate={handleUpdate}
                />
            }
        </div>
    )
}


export default UpdateButton;