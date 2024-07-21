import {DailyRecordProps} from '@/ledger/components/financialOverview/list/types';

const DailyRecord: React.FC<DailyRecordProps> = ({ containerStyle, iconStyle, expenseRecord }) => {
    return (
        <>
            <li className={`flex items-center text-lg p-2 bg-white rounded-lg shadow-md border-l-4 ${containerStyle}`}>
                <i className={`${iconStyle}`}></i>
                <span>{expenseRecord}</span>
            </li>
        </>
    )
}

export default DailyRecord;