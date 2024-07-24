import { useState } from 'react';
import { toggleModalVisibility } from '@/todolist/services/index';
import { UseModalHook } from '@/todolist/types/index.type';

export const useModal: UseModalHook = () => {

    // 顯示/隱藏 編輯事項視窗 
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        toggleModalVisibility(setIsModalOpen);
    }

    return ({
        isModalOpen,
        // 開啟/關閉 編輯事項視窗觸發器
        toggleModalVisibility: toggleModal,
    })
}


