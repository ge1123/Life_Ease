export interface TransactionTypeButtonProps {
    onClick: () => void;
    label: string;
    description: string;
}

export interface ReturnButtonProps{
    onClick: () => void;
}

export interface TimeSelectionButtonProps {
    bgStyle: string,
    hoverStyle: string,
    iconStyle: string,
    text: string
}