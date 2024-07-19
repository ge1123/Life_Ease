import CategorySelection from "@/ledger/components/accountingForm/model/categorySelection";
import ExpenseAmount from "@/ledger/components/accountingForm/model/expenseAmount";
import ExpenseNotes from "@/ledger/components/accountingForm/model/expenseNotes";
import TimeSelection from "@/ledger/components/accountingForm/model/timeSelection";
import StepSection from "@/ledger/components/accountingForm/common/stepSection";
import ReturnButton from '@/ledger/components/accountingForm/button/returnButton';
import SaveButton from '@/ledger/components/accountingForm/button/saveButton';
import { IncomFormProps } from "@/ledger/components/accountingForm/form/types";

const IncomForm: React.FC<IncomFormProps> = ({ resetTransactionType }) => {


    return (
        <>
            <TimeSelection />
            <StepSection />

            <CategorySelection />
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


export default IncomForm;