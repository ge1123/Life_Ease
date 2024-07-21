import DailyRecord from '@/ledger/components/financialOverview/list/dailyRecord';

const DailyExpenses = () => {
    return (
        <div className="bg-white p-6 rounded-lg max-w-md w-full mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">今日花費</h1>
            <p className="text-xl text-green-500 font-bold mb-4 text-center">$ 300</p>
            <ul className="list-none space-y-2 p-1 rounded-lg">
                <DailyRecord containerStyle='border-green-500' iconStyle='fas fa-utensils text-green-500 mr-2' expenseRecord='主食 $ 100'/>
                <DailyRecord containerStyle='border-yellow-500' iconStyle='fas fa-gas-pump text-yellow-500 mr-2' expenseRecord='加油 $ 100'/>
                <DailyRecord containerStyle='border-red-500' iconStyle='fas fa-film text-red-500 mr-2' expenseRecord='娛樂 $ 100'/>
            </ul>
        </div>
    );
};

export default DailyExpenses;