import { useEffect, useState, useCallback } from 'react';
import { MONTHS_DICT, getCurrentMonthIndex } from '@/monthlytasks/constants';
import { fetchMonthlyTasksData } from '@/monthlytasks/services/api';

interface UseMonthlyTasksProps {
    fetchMonthlyTasks: FetchMonthlyTasks;
    setSelectedMonth: React.Dispatch<React.SetStateAction<number>>;
    MONTHS_DICT: MonthsDict;
    monthlyTasks: MonthlyTask[];
    selectedMonth: number;
}

type FetchMonthlyTasks = (monthly: number) => Promise<void>;

type UseMonthlyTasksStateHook = () => UseMonthlyTasksProps;

const useMonthlyTasksState: UseMonthlyTasksStateHook = () => {
    const [monthlyTasks, setMonthlyTasks] = useState<MonthlyTask[]>([]);
    const [selectedMonth, setSelectedMonth] = useState<number>(getCurrentMonthIndex);

    const fetchMonthlyTasks: FetchMonthlyTasks = useCallback(async (month) => {
        const response: MonthlyTask[] = await fetchMonthlyTasksData(month);
                 
        setMonthlyTasks(response);
    }, []);

    useEffect(() => {
        fetchMonthlyTasks(selectedMonth);
    }, [selectedMonth, fetchMonthlyTasks]);

    return {
        fetchMonthlyTasks,
        setSelectedMonth,
        MONTHS_DICT,
        monthlyTasks,
        selectedMonth
    };
};

export default useMonthlyTasksState;
