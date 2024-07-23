import { TimeSelectionButtonProps } from "@/ledger/components/accountingForm/button/types";
import '@/ledger/styles/index.scss';

const TimeSelectionButton: React.FC<TimeSelectionButtonProps> = ({ bgStyle, hoverStyle, iconStyle, text, onClick }) => {
    return (
        <>
            <button
                className={`${bgStyle} ${hoverStyle} timeSelection-button`}
                onClick={onClick}
            >
                <i className={iconStyle}></i>{text}
            </button>
        </>
    )
}

export default TimeSelectionButton;