'use client';

import AccountingCreation from "@/ledger/components/accountingForm/model/accountingCreation";
import ExpenseForm from "./form/expenseForm";
import IncomeForm from "./form/incomeForm";
import useTransactionType from "@/ledger/hooks/useTransactionType";
import '@/ledger/styles/index.scss';
import { resetTransactionType, selectTransactionType } from "@/ledger/services/transactionTypeService";



const AccountingForm: React.FC = () => {

  const {
    transactionType,
    setTransactionType,
    isTypeSelected,
    setIsTypeSelected
  } = useTransactionType();

  const handleSelectTransactionType = () => {
    selectTransactionType(transactionType, { setTransactionType, setIsTypeSelected });
  };

  const handleResetTransactionType = () => {
    resetTransactionType({ setTransactionType, setIsTypeSelected });
  };

  return (
    <div className="accounting-form__container">
      {isTypeSelected === false && (
        <AccountingCreation
          selectTransactionType={handleSelectTransactionType}
        />
      )}
      {transactionType === "expense" && (
        <ExpenseForm
          resetTransactionType={handleResetTransactionType}
        />
      )}
      {transactionType === "income" && (
        <IncomeForm
          resetTransactionType={handleResetTransactionType}
        />
      )}
    </div>
  );
};


export default AccountingForm;