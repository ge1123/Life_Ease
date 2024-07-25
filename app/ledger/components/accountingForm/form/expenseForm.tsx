import React, { useState } from "react";
import SaveModalButton from "@/ledger/components/accountingForm/model/saveButtonModal";
import ReturnButton from '@/ledger/components/accountingForm/button/returnButton';
import StepSection from "@/ledger/components/accountingForm/common/stepSection";
import { ExpenseFormProps } from "@/ledger/components/accountingForm/form/types";
import Amount from "@/ledger/components/accountingForm/model/amount";
import CategorySelection from "@/ledger/components/accountingForm/model/categorySelection";
import Notes from "@/ledger/components/accountingForm/model/notes";
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

            <Amount type="支出金額" />
            <StepSection />

            <Notes />

            <div className="flex justify-end space-x-4">
                <ReturnButton onClick={resetTransactionType} />
                <SaveModalButton onClick={handle} isShow={isSuccess} />
            </div>
        </>
    );
}


export default ExpenseForm;