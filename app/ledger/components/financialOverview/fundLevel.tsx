import '@/ledger/styles/index.scss';

const FundLevel = () => {
  return (
    <div className="fundLevel__container">
      <h1 className="fundLevel__header">資金水位</h1>
      <h6 className="fundLevel__body">本月餘額</h6>
      <p className="fundLevel__context">$ 300</p>
    </div>
  );
};

export default FundLevel;