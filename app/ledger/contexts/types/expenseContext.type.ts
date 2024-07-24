export interface ExpenseContextType {
    timePeriodSelection: string;
    selectedDate: Date;
    category: string;
    storeName: string;
    expenseAmount: number;
    expenseNote: string;
    setTimePeriodSelection: (timePeriod: string) => void;
    setSelectedDate: (date: Date) => void;
    setCategory: (category: string) => void;
    setStoreName: (storeName: string) => void;
    setExpenseAmount: (amount: number) => void;
    setExpenseNote: (note: string) => void;
}
