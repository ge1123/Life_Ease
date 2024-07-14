const TimeSelection = () => {
    return (
        <div className="bg-white p-6 mb-4 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">時間</h1>
            <div className="flex space-x-4 mb-4">
                <button className="flex items-center text-white bg-yellow-500 rounded px-4 py-2 hover:bg-yellow-600 transition duration-300">
                    <i className="fas fa-sun mr-2"></i>早
                </button>
                <button className="flex items-center text-white bg-red-400 rounded px-4 py-2 hover:bg-red-500 transition duration-300">
                    <i className="fas fa-cloud-sun mr-2"></i>午
                </button>
                <button className="flex items-center text-white bg-purple-500 rounded px-4 py-2 hover:bg-purple-600 transition duration-300">
                    <i className="fas fa-moon mr-2"></i>晚
                </button>
            </div>
            <input
                type="date"
                placeholder="請輸入時間"
                className="p-2 border border-gray-300 rounded"
            />
        </div>
    );
};

export default TimeSelection;