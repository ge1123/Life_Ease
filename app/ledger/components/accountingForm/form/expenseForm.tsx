import React, { useState } from "react";
import Modal from 'react-modal';
import SaveModalButton from "@/_components/modal/saveButtonModal";
import ReturnButton from '@/ledger/components/accountingForm/button/returnButton';
import SaveButton from '@/ledger/components/accountingForm/button/saveButton';
import StepSection from "@/ledger/components/accountingForm/common/stepSection";
import { ExpenseFormProps } from "@/ledger/components/accountingForm/form/types";
import CategorySelection from "@/ledger/components/accountingForm/model/categorySelection";
import ExpenseAmount from "@/ledger/components/accountingForm/model/expenseAmount";
import ExpenseNotes from "@/ledger/components/accountingForm/model/expenseNotes";
import StoreInfo from "@/ledger/components/accountingForm/model/storeInfo";
import TimeSelection from "@/ledger/components/accountingForm/model/timeSelection";


const ExpenseForm: React.FC<ExpenseFormProps> = ({ resetTransactionType }) => {

    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const handle = () => {
        setIsSuccess(true);
        setTimeout(() => {
            setIsSuccess(false);
        }, 3000);
    }

    return (
        <>
            <TimeSelection />
            <StepSection />

            <CategorySelection />
            <StepSection />

            <StoreInfo />
            <StepSection />

            <ExpenseAmount />
            <StepSection />

            <ExpenseNotes />

            <div className="flex justify-end space-x-4">
                <ReturnButton onClick={resetTransactionType} />
                <SaveModalButton onClick={handle} isShow={isSuccess} />
            </div>
        </>
    );
}


export default ExpenseForm;