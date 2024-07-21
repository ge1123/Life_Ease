import '@/ledger/styles/financialOverview.scss';

const FundLevel = () => {
  return (
    <div className="financialOverview__fundLevel__container">
      <h1 className="financialOverview__fundLevel__header">資金水位</h1>
      <h6 className="financialOverview__fundLevel__body">本月餘額</h6>
      <p className="financialOverview__fundLevel__context">$ 300</p>
    </div>
  );
};

export default FundLevel;