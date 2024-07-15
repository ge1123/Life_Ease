import { TransactionTypeButtonProps } from '@/ledger/components/accountingForm/button/types';
import '@/ledger/styles/accountingForm.scss';

const TransactionTypeButton: React.FC<TransactionTypeButtonProps> = ({ onClick, label, description }) => {
    return (
        <div
            onClick={onClick}
        >
            {label === "支出" && <i className="fas fa-money-bill-wave text-3xl mb-2"></i>}
            {label === "收入" && <i className="fas fa-piggy-bank text-3xl mb-2"></i>}

            <span className="accounting-creation__transaction-type-button__label">{label}</span>
            <p className="accounting-creation__transaction-type-button__description">{description}</p>
        </div>
    )
}

export default TransactionTypeButton;