import { ToggleModalOpenState } from '@/todolist/types/index.type';

type UseModal = {
    showModal: boolean;
    toggleModal: () => void;
}

export type UseModalHook = () => UseModal;