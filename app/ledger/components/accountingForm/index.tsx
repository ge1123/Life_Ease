'use client';

import ExpenseForm from "@/ledger/components/accountingForm/form/expenseForm";
import IncomeForm from "@/ledger/components/accountingForm/form/incomeForm";
import AccountingCreation from "@/ledger/components/accountingForm/model/accountingCreation";
import useTransactionType from "@/ledger/hooks/useTransactionType";
import { resetTransactionType, selectTransactionType } from "@/ledger/services/transactionTypeService";
import '@/ledger/styles/index.scss';



const AccountingForm: React.FC = () => {

  const {
    transactionType,
    setTransactionType,
    isTypeSelected,
    setIsTypeSelected
  } = useTransactionType();

  const handleSelectTransactionType = (transactionType: string) => {
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