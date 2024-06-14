import '@/styles/downlist.style.scss'
import React, { ChangeEvent } from 'react';

interface DownListProps {
    className?: string;
    selectedMonth: number;
    setSelectedMonth: React.Dispatch<React.SetStateAction<number>>;
    monthsDict: MonthsDict;
}

type HandleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => void;

const Downlist: React.FC<DownListProps> = ({ className, selectedMonth, monthsDict, setSelectedMonth }) => {

    const handleMonthChange: HandleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedMonth(parseInt(e.target.value));
    };

    return (
        <div className={className}>
            <select
                className="monthlyDownlist__body"
                value={selectedMonth}
                onChange={handleMonthChange}
            >
                {Object.entries(monthsDict).map(([month, value]) => {
                    return (
                        <option
                            key={month}
                            value={value}
                            className="monthlyDownlist____option">
                            {month}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default Downlist;