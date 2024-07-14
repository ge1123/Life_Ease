const AccountingCreation = () => {
    return (
        <div className="bg-white p-6 mb-4 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">建立帳額</h1>
            <div className="flex space-x-4">
                <button className="flex items-center text-white bg-pink-500 rounded px-4 py-2 hover:bg-pink-600 transition duration-300">
                    <i className="fas fa-money-bill-wave mr-2"></i>
                    支出
                </button>
                <button className="flex items-center text-white bg-green-500 rounded px-4 py-2 hover:bg-green-600 transition duration-300">
                    <i className="fas fa-piggy-bank mr-2"></i>
                    收入
                </button>
            </div>
        </div>
    );
};

export default AccountingCreation;