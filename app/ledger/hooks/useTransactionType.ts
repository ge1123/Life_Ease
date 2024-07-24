import { useState } from "react";
import { UseTransactionType } from "@/ledger/hooks/types";



const useTransactionType = (): UseTransactionType => {
    const [transactionType, setTransactionType] = useState('');
    const [isTypeSelected, setIsTypeSelected] = useState(false);

    return {
        transactionType,
        isTypeSelected,
        setTransactionType,
        setIsTypeSelected
    }

}


export default useTransactionType;