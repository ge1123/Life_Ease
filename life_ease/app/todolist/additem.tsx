const AddItem = ({ toggleModal }: AddItemProps) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
            <div className="bg-white p-5 border border-gray-300 shadow-lg rounded-lg">
                <h1 className="text-lg">新增事項</h1>
                <div className="flex flex-col space-y-4">
                    <input className="border border-gray-300 p-2 rounded-md"
                        type="text"
                        placeholder="請輸入標題"
                    />
                    <input className="border border-gray-300 p-2 rounded-md"
                        type="date"
                        placeholder="請輸入時間"
                    />
                </div>
                <button
                    className="bg-red-500 text-white font-bold py-2 px-4 mt-4 rounded"
                    onClick={toggleModal}>
                    Close
                </button>
            </div>
        </div>
    )

}


export default AddItem;