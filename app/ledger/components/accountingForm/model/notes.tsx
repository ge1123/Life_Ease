import { useExpenseContext } from "@/ledger/contexts/expenseContext";

const Notes = () => {
    const { setExpenseNote } = useExpenseContext();

    return (
        <div className="bg-white p-6 mb-4 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">備註</h1>
            <textarea
                onChange={(e) => setExpenseNote(e.target.value)}
                placeholder="請輸入備註"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            ></textarea>
        </div>
    );
};


export default Notes;