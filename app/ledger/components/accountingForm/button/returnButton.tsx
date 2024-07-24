import '@/ledger/styles/index.scss';
import { ReturnButtonProps } from "@/ledger/components/accountingForm/button/types";

const ReturnButton: React.FC<ReturnButtonProps> = ({ onClick: resetTransactionType }) => {
    return (
        <button
            onClick={resetTransactionType}
            className="returnButton">
            <i className="fas fa-arrow-left mr-2"></i>返回
        </button>
    )
}

export default ReturnButton;