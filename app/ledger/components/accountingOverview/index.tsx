import '@/ledger/styles/accountingOverview.scss';

const AccountingOverview = () => {
    return (
        <div className="accounting-overview__container">
            <h1 className="accounting-overview__summary">記帳總覽</h1>
            <div className="accounting-overview__record">
                <button className="accounting-overview__button">
                    <i className="fas fa-list-alt accounting-overview__icon"></i>類別紀錄
                </button>
                <button className="accounting-overview__button">
                    <i className="fas fa-calendar-alt accounting-overview__icon"></i>每月紀錄
                </button>
            </div>
        </div>
    );
};

export default AccountingOverview;