import Modal from 'react-modal';
import '@/ledger/styles/accountingForm/saveButtonModal.scss';
import { SaveButtonProps } from '@/ledger/components/accountingForm/model/types';
import { useExpenseContext } from '@/ledger/contexts/expenseContext';




const SaveModalButton: React.FC<SaveButtonProps> = ({ onClick, isShow }) => {

    const {
        timePeriodSelection,
        selectedDate,
        category,
        storeName,
        expenseAmount,
        expenseNote
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
                        <p className="modal__message">{`${category.toString()}`}</p>
                        <p className="modal__message">{`${storeName.toString()}`}</p>
                        <p className="modal__message">{`${expenseAmount.toString()}`}</p>
                        <p className="modal__message">{`${expenseNote.toString()}`}</p>
                        {/* <button className="modal__close-button">關閉</button> */}
                    </div>
                </Modal>}

        </>
    )
}

export default SaveModalButton;