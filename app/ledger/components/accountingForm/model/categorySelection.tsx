import CategoryButton from "@/ledger/components/accountingForm/button/categoryButton";
import { useExpenseContext } from "@/ledger/contexts/expenseContext";

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


    const { category, setCategory } = useExpenseContext();

    return (
        <div className="bg-white p-6 mb-4 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">類別</h1>
            <div className="flex space-x-4">
                {categoryOptions.map(option => (
                    <CategoryButton
                        onClick={setCategory}
                        key={option.key}
                        category={option.category}
                        bgStyle={category === option.category ?
                            `scale-105 border-2 border-${option.bgColor}-600 bg-${option.bgColor}-500` :
                            `bg-${option.bgColor}-500`}
                        hoverStyle={`hover:bg-${option.bgColor}-600`}
                    />
                ))}

            </div>
        </div>
    );
};
export default CategorySelection;