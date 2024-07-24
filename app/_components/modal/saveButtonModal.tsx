import Modal from 'react-modal';
import '@/_styles/saveButtonModal.scss';
import { useExpenseContext } from '@/ledger/contexts/expenseContext';

interface SaveButtonProps {
    onClick: () => void;
    isShow: boolean;
}


const SaveModalButton: React.FC<SaveButtonProps> = ({ onClick, isShow }) => {

    const {
        timePeriodSelection,
        selectedDate,
    } = useExpenseContext();

    return (
        <>
            <button
                className="saveButton"
                onClick={onClick}
            >
                <i className="fas fa-save mr-2"></i>儲存
            </button>
            {isShow &&
                <Modal
                    isOpen
                    contentLabel="Success Modal"
                    className="modal"
                    overlayClassName="overlay"
                >
                    <div className="modal__content">
                        <h2 className="modal__title">成功!</h2>
                        <p className="modal__message">{`${selectedDate.toISOString()}`}</p>
                        <p className="modal__message">{`${timePeriodSelection.toString()}`}</p>
                        {/* <button className="modal__close-button">關閉</button> */}
                    </div>
                </Modal>}

        </>
    )
}

export default SaveModalButton;