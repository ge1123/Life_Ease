'use client';

import AccountingCreation from "@/ledger/components/accountingForm/model/accountingCreation";
import { useState } from "react";
import ExpenseForm from "./form/expenseForm";
import IncomeForm from "./form/incomeForm";



const AccountingForm = () => {


  const [type, setType] = useState('');
  const [isSelect, setIsSelect] = useState(false);

  return (
    <div className="bg-white rounded-lg p-6 space-y-4">
      {isSelect === false && <AccountingCreation setType={setType} setIsSelect={setIsSelect} />}
      {type === "expense" && <ExpenseForm setType={setType} setIsSelect={setIsSelect} />}
      {type === "income" && <IncomeForm setType={setType} setIsSelect={setIsSelect} />}
    </div>
  );
};


export default AccountingForm;