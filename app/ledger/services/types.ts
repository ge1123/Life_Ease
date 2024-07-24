export interface TransactionServiceParams {
    setTransactionType: React.Dispatch<React.SetStateAction<string>>;
    setIsTypeSelected: React.Dispatch<React.SetStateAction<boolean>>;
}


export interface SelectTransactionType {
    (
        type: string,
        transactionServiceParams: TransactionServiceParams
    ): void;
}

export interface ResetTransactionType {
    (
        transactionServiceParams: TransactionServiceParams
    ): void;
}