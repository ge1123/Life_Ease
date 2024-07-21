import {DailyRecordProps} from '@/ledger/components/financialOverview/list/types';
import '@/ledger/styles/index.scss';

const DailyRecord: React.FC<DailyRecordProps> = ({ containerStyle, iconStyle, expenseRecord }) => {
    return (
        <>
            <li className={`dailyRecord__container ${containerStyle}`}>
                <i className={`${iconStyle}`}></i>
                <span>{expenseRecord}</span>
            </li>
        </>
    )
}

export default DailyRecord;