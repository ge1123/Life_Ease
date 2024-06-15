import { useState } from 'react';
import { toggleModal } from '@/todolist/services/index';

const useModal = () => {

    // 顯示/隱藏 編輯事項視窗 
    const [showModal, setShowModal] = useState(false);

    console.log('showModal', showModal);

    return ({
        showModal,
        // 開啟/關閉 編輯事項視窗觸發器
        toggleModal: () => toggleModal(() => setShowModal(!showModal)),
    })
}


export default useModal;