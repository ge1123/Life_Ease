import { useState } from "react";
import { UseExpenseAmount } from "@/ledger/hooks/types";



const useExpenseAmount = (): UseExpenseAmount => {

    const [expenseAmount, setExpenseAmount] = useState<number>(0);

    return {
        expenseAmount,
        setExpenseAmount
    }
}


export default useExpenseAmount;