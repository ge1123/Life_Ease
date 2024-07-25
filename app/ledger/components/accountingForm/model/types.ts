export interface AccountingCreationProps {
    selectTransactionType: (type: string) => void;
}

export interface AmountProps {
    type: string
}

export interface BaseButtonProps {
    className: string;
    onClick: () => void;
    icon: JSX.Element;
}

export interface SaveButtonProps {
    onClick: () => void;
    isShow: boolean;
}