'use client';
import Timeline from '@/monthlytasks/components/timeline';
import MainLayout from '@/_layout/components/mainLayout';
import DownList from '@/_components/monthly.downlist';
import '@/monthlytasks/styles/index.scss';
import { useMonthlyTasksState } from '@/monthlytasks/hooks/index';
import { Dispatch, SetStateAction } from 'react';

interface ChooseMonthProps {
    selectedMonth: number;
    setSelectedMonth: Dispatch<SetStateAction<number>>;
    MONTHS_DICT: MonthsDict;
}

interface TasksProps {
    monthlyTasks: MonthlyTask[];
}

const ChooseMonth: React.FC<ChooseMonthProps> = ({ selectedMonth, setSelectedMonth, MONTHS_DICT }) => {
    return (
        <>
            <span className='monthlyTask__label'>請選擇月份</span>
            <div className="monthlyTask__dropDown-container">
                <DownList
                    className="monthlyTask__monthlyDownList"
                    selectedMonth={selectedMonth}
                    setSelectedMonth={setSelectedMonth}
                    monthsDict={MONTHS_DICT}
                />
            </div>
        </>
    )
}

const Tasks: React.FC<TasksProps> = ({ monthlyTasks }) => {
    return (
        <>
            {monthlyTasks.length === 0 ? (
                <div>無工作事項</div>
            ) : (
                monthlyTasks.map((task, index) => (
                    <div key={index} className="monthlyTask__task">
                        {/* 渲染任務的詳細信息 */}
                        <span>{task.dueDate ? task.dueDate : '無日期'}</span> {/* 格式化日期 */}
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                    </div>
                ))
            )}
        </>
    )
}

export default function MonthlyTasks() {

    const {
        setSelectedMonth,
        MONTHS_DICT,
        selectedMonth,
        monthlyTasks } = useMonthlyTasksState();

    return (
        <MainLayout>
            <div className="monthlyTask__container">
                <ChooseMonth selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} MONTHS_DICT={MONTHS_DICT} />
            </div>

            <div className="monthlyTask__tasks-container">
                <Tasks monthlyTasks={monthlyTasks} />
            </div>
        </MainLayout>
    );
}
