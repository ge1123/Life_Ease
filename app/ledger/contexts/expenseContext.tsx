import { createContext, ReactNode, useContext } from "react";
import useDateSelection from '@/_hooks/useDatepicker';
import { ExpenseContextType } from "@/ledger/contexts/types/expenseContext.type";
import useTimePeriodSelection from "@/ledger/hooks/useTimePeriodSelection";

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

    return (
        <ExpenseContext.Provider
            value={{
                timePeriodSelection,
                setTimePeriodSelection,
                selectedDate,
                setSelectedDate
            }}>
            {children}
        </ExpenseContext.Provider>
    );
}