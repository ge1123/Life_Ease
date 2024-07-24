import { useState } from "react";
import { UseExpenseNote } from "@/ledger/hooks/types";



const useExpenseNote = (): UseExpenseNote => {

    const [expenseNote, setExpenseNote] = useState<string>("");

    return {
        expenseNote,
        setExpenseNote
    }
}


export default useExpenseNote;