import DailyExpenses from "@/ledger/components/financialOverview/dailyExpenses";
import FundLevel from "@/ledger/components/financialOverview/fundLevel";
import '@/ledger/styles/index.scss';

const FinancialOverview = () => {
    return (
        <div className="financialOverview__container">
            <div className="financialOverview__fundLevel-container">
                <FundLevel />
            </div>
            <hr className="financialOverview__stepSection" />
            <div>
                <DailyExpenses />
            </div>
        </div>
    );
};

export default FinancialOverview;