import { Dispatch, SetStateAction } from "react";

export interface UseTransactionType {
    transactionType: string;
    isTypeSelected: boolean;
    setTransactionType: Dispatch<SetStateAction<string>>;
    setIsTypeSelected: Dispatch<SetStateAction<boolean>>;
}

export interface UseTimePeriodSelection {
    timePeriodSelection: string;
    setTimePeriodSelection: Dispatch<SetStateAction<string>>;
}

export interface UseCategory {
    category: string;
    setCategory: Dispatch<SetStateAction<string>>;
}

export interface UseStoreInfo {
    storeName: string;
    setStoreName: Dispatch<SetStateAction<string>>;
}

export interface UseExpenseAmount {
    expenseAmount: number;
    setExpenseAmount: Dispatch<SetStateAction<number>>;
}

export interface UseExpenseNote {
    expenseNote: string;
    setExpenseNote: Dispatch<SetStateAction<string>>;
}