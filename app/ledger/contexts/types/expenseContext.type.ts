export interface ExpenseContextType {
    timePeriodSelection: string;
    setTimePeriodSelection: (timePeriod: string) => void;
    selectedDate: Date;
    setSelectedDate: (date: Date) => void;
}
