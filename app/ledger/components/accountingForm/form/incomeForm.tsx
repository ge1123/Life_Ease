import { useState } from 'react';
import SaveModalButton from '@/ledger/components/accountingForm/model/saveButtonModal';
import ReturnButton from '@/ledger/components/accountingForm/button/returnButton';
import StepSection from "@/ledger/components/accountingForm/common/stepSection";
import { IncomFormProps } from "@/ledger/components/accountingForm/form/types";
import CategorySelection from "@/ledger/components/accountingForm/model/categorySelection";
import IncomeAmount from "@/ledger/components/accountingForm/model/incomeAmount";
import Notes from "@/ledger/components/accountingForm/model/notes";
import TimeSelection from "@/ledger/components/accountingForm/model/timeSelection";

const IncomForm: React.FC<IncomFormProps> = ({ resetTransactionType }) => {

    return (
        <>
            <TimeSelection />
            <StepSection />

            <CategorySelection />
            <StepSection />

            <IncomeAmount />
            <StepSection />

            <Notes />

            <div className="flex justify-end space-x-4">
                <ReturnButton onClick={resetTransactionType} />
                <SaveModalButton />
            </div>
        </>
    );
}


export default IncomForm;