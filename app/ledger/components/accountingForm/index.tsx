import AccountingCreation from "@/ledger/components/accountingForm/accountingCreation";
import CategorySelection from "@/ledger/components/accountingForm/categorySelection";
import ExpenseAmount from "@/ledger/components/accountingForm/expenseAmount";
import ExpenseNotes from "@/ledger/components/accountingForm/expenseNotes";
import StoreInfo from "@/ledger/components/accountingForm/storeInfo";
import TimeSelection from "@/ledger/components/accountingForm/timeSelection";

const AccountingForm = () => {
    return (
      <div className="bg-white rounded-lg p-6 space-y-4">
        <AccountingCreation />
        <hr className="border-t-2 border-gray-200 my-4" />
        <TimeSelection />
        <hr className="border-t-2 border-gray-200 my-4" />
        <CategorySelection />
        <hr className="border-t-2 border-gray-200 my-4" />
        <StoreInfo />
        <hr className="border-t-2 border-gray-200 my-4" />
        <ExpenseAmount />
        <hr className="border-t-2 border-gray-200 my-4" />
        <ExpenseNotes />
                
        <div className="flex justify-end">
          <button className="flex items-center text-white bg-blue-500 rounded px-4 py-2 hover:bg-blue-600 transition duration-300">
            <i className="fas fa-save mr-2"></i>儲存
          </button>
        </div>
      </div>
    );
  };


export default AccountingForm;