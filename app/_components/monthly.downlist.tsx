import '@/_styles/downlist.style.scss'
import React, { ChangeEvent } from 'react';

interface DownListProps {
    className?: string;
    selectedMonth: number;
    setSelectedMonth: React.Dispatch<React.SetStateAction<number>>;
    monthsDict: MonthsDict;
}

interface DownListOptionsProps {
    monthsDict: MonthsDict;
}

type HandleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => void;

const DownListOptions: React.FC<DownListOptionsProps> = ({ monthsDict }) => {
    return (
        <>
            {Object.entries(monthsDict).map(([month, value]) => 
                    <option
                        key={month}
                        value={value}
                        className="monthlyDownlist____option">
                        {month}
                    </option>
            )}
        </>
    )
}


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
                <DownListOptions monthsDict={monthsDict} />
            </select>
        </div>
    );
};

export default Downlist;