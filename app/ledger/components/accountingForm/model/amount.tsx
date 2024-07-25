const Amount = () => {
    return (
        <div className="bg-white p-6 mb-4 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">支出金額</h1>
            <input
                type="text"
                placeholder="請輸入金額"
                className="p-2 mb-4 border border-gray-300 rounded"
            />
        </div>
    );
};


export default Amount;