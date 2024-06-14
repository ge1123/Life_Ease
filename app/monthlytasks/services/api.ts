import { BASE_URLS } from '@/utils/config';
import { fetchListDataAsync } from '@/utils/apiClient';

export const fetchMonthlyTasksData = async (month: number): Promise<MonthlyTask[]> => {
    const url = `${BASE_URLS.MONTHLYTASKS}/${month}`;
    const response = await fetchListDataAsync<MonthlyTask>(url);
    return response;
};
