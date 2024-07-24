import DailyRecord from '@/ledger/components/financialOverview/list/dailyRecord';
import '@/ledger/styles/index.scss';

const DailyExpenses = () => {
    return (
        <div className="dailyExpenses__container">
            <h1 className="dailyExpenses__header">今日花費</h1>
            <p className="dailyExpenses__amount">$ 300</p>
            <ul className="dailyExpenses__list">
                <DailyRecord containerStyle='border-green-500' iconStyle='fas fa-utensils text-green-500 mr-2' expenseRecord='主食 $ 100'/>
                <DailyRecord containerStyle='border-yellow-500' iconStyle='fas fa-gas-pump text-yellow-500 mr-2' expenseRecord='加油 $ 100'/>
                <DailyRecord containerStyle='border-red-500' iconStyle='fas fa-film text-red-500 mr-2' expenseRecord='娛樂 $ 100'/>
            </ul>
        </div>
    );
};

export default DailyExpenses;