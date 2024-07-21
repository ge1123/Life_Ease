import '@/ledger/styles/index.scss';
import SummaryButtonProps from '@/ledger/components/accountingOverview/button/summaryButton';

const AccountingOverview = () => {
    return (
        <div className="accounting-overview__container">
            <h1 className="accounting-overview__summary">記帳總覽</h1>
            <div className="accounting-overview__record">
                <SummaryButtonProps iconStyle='fas fa-list-alt' type='類別紀錄'/>
                <SummaryButtonProps iconStyle='fas fa-calendar-alt' type='每月紀錄'/>
            </div>
        </div>
    );
};

export default AccountingOverview;