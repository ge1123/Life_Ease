import { useState } from 'react';
import { toggleModalOpenState } from '@/todolist/services/index';
import { UseModalHook } from '@/todolist/types/index.type';

const useModal: UseModalHook = () => {

    // 顯示/隱藏 編輯事項視窗 
    const [showModal, setShowModal] = useState(false);

    return ({
        showModal,
        // 開啟/關閉 編輯事項視窗觸發器
        toggleModal: () => toggleModalOpenState(setShowModal),
    })
}


export default useModal;