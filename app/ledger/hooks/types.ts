import { Dispatch, SetStateAction } from "react";

export interface UseTransactionType {
    transactionType: string;
    isTypeSelected: boolean;
    setTransactionType: Dispatch<SetStateAction<string>>,
    setIsTypeSelected: Dispatch<SetStateAction<boolean>>
}