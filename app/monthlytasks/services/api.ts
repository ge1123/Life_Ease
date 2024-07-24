import { fetchListDataAsync } from '@/_utils/apiClient';
import { BASE_URLS } from '@/_utils/config';

export const fetchMonthlyTasksData = async (month: number): Promise<MonthlyTask[]> => {
    const url = `${BASE_URLS.MONTHLYTASKS}/${month}`;
    const response = await fetchListDataAsync<MonthlyTask>(url);
    return response;
};
