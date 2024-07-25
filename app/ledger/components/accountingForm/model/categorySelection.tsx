import CategoryButton from "@/ledger/components/accountingForm/button/categoryButton";

const CategorySelection = () => {


    const categoryOptions = [
        {
            key: 1,
            category: "主食",
            bgColor: "green"
        },
        {
            key: 2,
            category: "點心",
            bgColor: "yellow"
        },
        {
            key: 3,
            category: "飲品",
            bgColor: "teal"
        }
    ]

    return (
        <div className="bg-white p-6 mb-4 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">類別</h1>
            <div className="flex space-x-4">

                {categoryOptions.map(option => (
                    <CategoryButton
                        key={option.key}
                        category={option.category}
                        bgColor={option.bgColor}
                    />
                ))}
                {/* <button className="text-white bg-green-500 rounded px-4 py-2 hover:bg-green-600 transition duration-300">
                    主食
                </button>
                <button className="text-white bg-yellow-500 rounded px-4 py-2 hover:bg-yellow-600 transition duration-300">
                    點心
                </button>
                <button className="text-white bg-teal-500 rounded px-4 py-2 hover:bg-teal-600 transition duration-300">
                    飲品
                </button> */}
            </div>
        </div>
    );
};
export default CategorySelection;