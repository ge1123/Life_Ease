import { TimeSelectionButtonProps } from "@/ledger/components/accountingForm/button/types";
import '@/ledger/styles/index.scss';

const TimeSelectionButton: React.FC<TimeSelectionButtonProps> = ({ bgStyle, hoverStyle, iconStyle, text }) => {
    return (
        <>
            <button className={`${bgStyle} ${hoverStyle} timeSelection-button`}>
                <i className={iconStyle}></i>{text}
            </button>
        </>
    )
}

export default TimeSelectionButton;