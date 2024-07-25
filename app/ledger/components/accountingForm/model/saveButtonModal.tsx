import { useState } from 'react';
import Modal from 'react-modal';
import '@/ledger/styles/accountingForm/saveButtonModal.scss';
import { SaveButtonProps } from '@/ledger/components/accountingForm/model/types';
import { useExpenseContext } from '@/ledger/contexts/expenseContext';




const SaveModalButton: React.FC<SaveButtonProps> = () => {

    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const handle = () => {
        setIsSuccess(true);
        setTimeout(() => {
            setIsSuccess(false);
        }, 3000);
    }

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
                onClick={handle}
            >
                <i className="fas fa-save mr-2"></i>儲存
            </button>
            {isSuccess &&
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