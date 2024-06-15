'use client';
import Timeline from '@/monthlytasks/components/timeline';
import MainLayout from '@/_layout/components/mainLayout';
import DownList from '@/_components/monthly.downlist';
import '@/monthlytasks/styles/monthlyTask.scss';
import useMonthlyTasksState from '@/monthlytasks/hooks/useMonthlyTasksState';

export default function MonthlyTasks() {
    const { setSelectedMonth, MONTHS_DICT, selectedMonth, monthlyTasks } = useMonthlyTasksState();

    return (
        <MainLayout>
            <div className="monthlyTask__container">
                <span className='monthlyTask__label'>請選擇月份</span>
                <div className="monthlyTask__dropdown">
                    <DownList
                        className="monthlyTask__monthlyDownList"
                        selectedMonth={selectedMonth}
                        setSelectedMonth={setSelectedMonth}
                        monthsDict={MONTHS_DICT}
                    />
                </div>
            </div>

            <div className="monthlyTask__tasks">
                {monthlyTasks.length === 0 ? (
                    <div>無工作事項</div>
                ) : (
                    monthlyTasks.map((task, index) => (
                        <div key={index} className="monthlyTask__task">
                            {/* 渲染任務的詳細信息 */}
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <span>{task.dueDate ? task.dueDate.toLocaleDateString() : '無日期'}</span> {/* 格式化日期 */}
                        </div>
                    ))
                )}
            </div>

        </MainLayout>
    );
}
