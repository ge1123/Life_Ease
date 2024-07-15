import CategorySelection from "@/ledger/components/accountingForm/model/categorySelection";
import ExpenseAmount from "@/ledger/components/accountingForm/model/expenseAmount";
import ExpenseNotes from "@/ledger/components/accountingForm/model/expenseNotes";
import TimeSelection from "@/ledger/components/accountingForm/model/timeSelection";
import { IncomFormProps } from "@/ledger/components/accountingForm/form/types";

const IncomForm: React.FC<IncomFormProps> = ({ resetTransactionType }) => {


    return (
        <>
            <TimeSelection />
            <hr className="border-t-2 border-gray-200 my-4" />
            <CategorySelection />
            <hr className="border-t-2 border-gray-200 my-4" />
            <ExpenseAmount />
            <hr className="border-t-2 border-gray-200 my-4" />
            <ExpenseNotes />

            <div className="flex justify-end space-x-4">
                <button
                    onClick={resetTransactionType}
                    className="flex items-center text-white bg-gray-500 rounded px-4 py-2 hover:bg-gray-600 transition duration-300">
                    <i className="fas fa-arrow-left mr-2"></i>返回
                </button>
                <button className="flex items-center text-white bg-blue-500 rounded px-4 py-2 hover:bg-blue-600 transition duration-300">
                    <i className="fas fa-save mr-2"></i>儲存
                </button>
            </div>
        </>
    );
}


export default IncomForm;