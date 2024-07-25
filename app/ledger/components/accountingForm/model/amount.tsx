import { AmountProps } from "@/ledger/components/accountingForm/model/types";
import { useExpenseContext } from "@/ledger/contexts/expenseContext";


const Amount: React.FC<AmountProps> = ({ type }) => {

    const { setExpenseAmount } = useExpenseContext();

    return (
        <div className="bg-white p-6 mb-4 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">{type}</h1>
            <input
                onChange={(event) => setExpenseAmount(parseFloat(event.target.value))}
                type="text"
                placeholder="請輸入金額"
                className="p-2 mb-4 border border-gray-300 rounded"
            />
        </div>
    );
};


export default Amount;