
type UseModal = {
    isModalOpen: boolean;
    toggleModalVisibility: () => void;
}

export type UseModalHook = () => UseModal;