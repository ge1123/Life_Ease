'use client';

import AccountingCreation from "@/ledger/components/accountingForm/model/accountingCreation";
import ExpenseForm from "./form/expenseForm";
import IncomeForm from "./form/incomeForm";
import useTransactionType from "@/ledger/hooks/useTransactionType";



const AccountingForm: React.FC = () => {

  const {
    transactionType,
    isTypeSelected,
    selectTransactionType,
    resetTransactionType
  } = useTransactionType();

  return (
    <div className="bg-white rounded-lg p-6 space-y-4">
      {isTypeSelected === false && <AccountingCreation selectTransactionType={selectTransactionType} />}
      {transactionType === "expense" && <ExpenseForm resetTransactionType={resetTransactionType} />}
      {transactionType === "income" && <IncomeForm resetTransactionType={resetTransactionType} />}
    </div>
  );
};


export default AccountingForm;