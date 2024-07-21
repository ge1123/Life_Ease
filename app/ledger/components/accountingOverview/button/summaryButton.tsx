import { SummaryButtonProps } from '@/ledger/components/accountingOverview/button/types';

const SummaryButton: React.FC<SummaryButtonProps> = ({ type, iconStyle }) => {
    return (
        <div>
            <button className="accounting-overview__button">
                <i className={`accounting-overview__icon ${iconStyle}`}></i>{type}
            </button>
        </div>
    )
}


export default SummaryButton;