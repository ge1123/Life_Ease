import { createContext, ReactNode, useContext } from "react";
import useDateSelection from '@/_hooks/useDatepicker';
import { ExpenseContextType } from "@/ledger/contexts/types/expenseContext.type";
import useTimePeriodSelection from "@/ledger/hooks/useTimePeriodSelection";
import useCategory from "../hooks/useCategory";
import useExpenseAmount from "../hooks/useExpenseAmount";
import useExpenseNote from "../hooks/useExpenseNote";
import useStoreInfo from "../hooks/useStoreName";

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);


export const useExpenseContext = () => {
    const context = useContext(ExpenseContext);

    if (context === undefined) {
        throw new Error("useExpenseContext must be used within an ExpenseProvider");
    }
    return context;
}


export const ExpenseProvider = ({ children }: { children: ReactNode }) => {

    const { timePeriodSelection, setTimePeriodSelection } = useTimePeriodSelection();

    const { selectedDate, setSelectedDate } = useDateSelection();

    const { category, setCategory } = useCategory();

    const { storeName, setStoreName } = useStoreInfo();

    const { expenseAmount, setExpenseAmount } = useExpenseAmount();

    const { expenseNote, setExpenseNote } = useExpenseNote();

    return (
        <ExpenseContext.Provider
            value={{
                timePeriodSelection,
                selectedDate,
                category,
                storeName,
                expenseAmount,
                expenseNote,
                setTimePeriodSelection,
                setSelectedDate,
                setCategory,
                setStoreName,
                setExpenseAmount,
                setExpenseNote
            }}>
            {children}
        </ExpenseContext.Provider>
    );
}