import ReturnButton from '@/ledger/components/accountingForm/button/returnButton';
import SaveButton from '@/ledger/components/accountingForm/button/saveButton';
import StepSection from "@/ledger/components/accountingForm/common/stepSection";
import { IncomFormProps } from "@/ledger/components/accountingForm/form/types";
import CategorySelection from "@/ledger/components/accountingForm/model/categorySelection";
import ExpenseNotes from "@/ledger/components/accountingForm/model/expenseNotes";
import IncomeAmount from "@/ledger/components/accountingForm/model/incomeAmount";
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

            <ExpenseNotes />

            <div className="flex justify-end space-x-4">
                <ReturnButton onClick={resetTransactionType} />
                <SaveButton />
            </div>
        </>
    );
}


export default IncomForm;