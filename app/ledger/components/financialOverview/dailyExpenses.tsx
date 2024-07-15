const DailyExpenses = () => {
    return (
        <div className="bg-white p-6 rounded-lg max-w-md w-full mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">今日花費</h1>
            <p className="text-xl text-green-500 font-bold mb-4 text-center">$ 300</p>
            <ul className="list-none space-y-2 p-1 rounded-lg">
                <li className="flex items-center text-lg p-2 bg-white rounded-lg shadow-md border-l-4 border-green-500">
                    <i className="fas fa-utensils text-green-500 mr-2"></i>
                    <span>主食 $ 100</span>
                </li>
                <li className="flex items-center text-lg p-2 bg-white rounded-lg shadow-md border-l-4 border-yellow-500">
                    <i className="fas fa-gas-pump text-yellow-500 mr-2"></i>
                    <span>加油 $ 100</span>
                </li>
                <li className="flex items-center text-lg p-2 bg-white rounded-lg shadow-md border-l-4 border-red-500">
                    <i className="fas fa-film text-red-500 mr-2"></i>
                    <span>娛樂 $ 100</span>
                </li>
            </ul>
        </div>
    );
};

export default DailyExpenses;