import DailyExpenses from "@/ledger/components/financialOverview/dailyExpenses";
import FundLevel from "@/ledger/components/financialOverview/fundLevel";

const FinancialOverview = () => {
    return (
        <div className="bg-white p-6 rounded-lg h-full">
            <div className="mb-4">
                <FundLevel />
            </div>
            <hr className="border-t-2 border-gray-200 my-4" />
            <div>
                <DailyExpenses />
            </div>
        </div>
    );
};

export default FinancialOverview;