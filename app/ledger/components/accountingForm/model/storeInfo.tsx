const StoreInfo = () => {
    return (
        <div className="bg-white p-6 mb-4 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">店家資訊</h1>
            <div className="mb-4">
                <div className="flex space-x-4 items-center">
                    <input
                        type="text"
                        placeholder="請輸入店家名稱"
                        className="flex-grow p-2 mb-2 border border-gray-300 rounded"
                    />
                    <button className="flex items-center text-white bg-blue-500 rounded px-4 py-2 hover:bg-blue-600 transition duration-300">
                        <i className="fas fa-search mr-2"></i>
                        搜尋
                    </button>
                    <button className="flex items-center text-white bg-green-500 rounded px-4 py-2 hover:bg-green-600 transition duration-300">
                        <i className="fas fa-plus mr-2"></i>
                        新增
                    </button>
                </div>
            </div>
            <p className="text-gray-600">上次造訪時間: 2024-07-25</p>
        </div>
    );
};


export default StoreInfo;