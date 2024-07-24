import React from "react";
import ReturnButton from '@/ledger/components/accountingForm/button/returnButton';
import SaveButton from '@/ledger/components/accountingForm/button/saveButton';
import StepSection from "@/ledger/components/accountingForm/common/stepSection";
import { ExpenseFormProps } from "@/ledger/components/accountingForm/form/types";
import CategorySelection from "@/ledger/components/accountingForm/model/categorySelection";
import ExpenseAmount from "@/ledger/components/accountingForm/model/expenseAmount";
import ExpenseNotes from "@/ledger/components/accountingForm/model/expenseNotes";
import StoreInfo from "@/ledger/components/accountingForm/model/storeInfo";
import TimeSelection from "@/ledger/components/accountingForm/model/timeSelection";
import { useExpenseContext } from "@/ledger/contexts/expenseContext";


const ExpenseForm: React.FC<ExpenseFormProps> = ({ resetTransactionType }) => {

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
                <SaveButton />
            </div>
        </>
    );
}


export default ExpenseForm;