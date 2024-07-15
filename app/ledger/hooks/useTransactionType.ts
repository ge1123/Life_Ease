import { useState } from "react";

interface TransactionType {
    transactionType: string;
    isTypeSelected: boolean;
    selectTransactionType: (type: string) => void;
    resetTransactionType: () => void;
}

const useTransactionType = (): TransactionType => {
    const [transactionType, setTransactionType] = useState('');
    const [isTypeSelected, setIsTypeSelected] = useState(false);


    const selectTransactionType = (type: string) => {
        setTransactionType(type)
        setIsTypeSelected(true)
    }

    const resetTransactionType = () => {
        setIsTypeSelected(false);
        setTransactionType('');
    }

    return {
        transactionType,
        isTypeSelected,
        selectTransactionType,
        resetTransactionType
    }

}


export default useTransactionType;