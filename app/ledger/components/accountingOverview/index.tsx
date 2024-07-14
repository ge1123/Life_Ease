const AccountingOverview = () => {
    return (
        <div className="bg-white p-6 mb-4 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">記帳總覽</h1>
            <div className="flex space-x-4">
                <button className="flex items-center text-blue-500 bg-white rounded px-4 py-2 border border-blue-300 hover:bg-gray-100 transition duration-300">
                    <i className="fas fa-list-alt mr-2"></i>類別紀錄
                </button>
                <button className="flex items-center text-blue-500 bg-white rounded px-4 py-2 border border-blue-300 hover:bg-gray-100 transition duration-300">
                    <i className="fas fa-calendar-alt mr-2"></i>每月紀錄
                </button>
            </div>
        </div>
    );
};

export default AccountingOverview;