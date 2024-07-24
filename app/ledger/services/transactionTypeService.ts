import { SelectTransactionType, ResetTransactionType } from "@/ledger/services/types";


export const selectTransactionType: SelectTransactionType = (
    type,
    { setTransactionType, setIsTypeSelected }
) => {
    setTransactionType(type);
    setIsTypeSelected(true);
};

export const resetTransactionType: ResetTransactionType = (
    { setTransactionType, setIsTypeSelected }

) => {
    setIsTypeSelected(false);
    setTransactionType('');
};