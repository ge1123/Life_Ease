import '@/ledger/styles/index.scss';
import React from 'react';
import CustomDatepicker from '@/_components/customDatepicker';
import { TimePeriod } from '@/_enums/timePeriod';
import useDateSelection from '@/_hooks/useDatepicker';
import { getEnumKeyByEnumValue } from '@/_utils/getEnumKeyByEnumValue';
import TimeSelectionButton from '@/ledger/components/accountingForm/button/timeSelectionButton';
import useTimePeriodSelection from '@/ledger/hooks/useTimePeriodSelection';

const TimeSelection = () => {

    const {
        timePeriodSelection,
        setTimePeriodSelection
    } = useTimePeriodSelection();

    const { selectedDate, setSelectedDate } = useDateSelection();


    const timeOptions = [
        {
            key: getEnumKeyByEnumValue(TimePeriod, TimePeriod.Morning),
            text: TimePeriod.Morning,
            bgColor: 'yellow',
            icon: 'fas fa-sun'
        },
        {
            key: getEnumKeyByEnumValue(TimePeriod, TimePeriod.Afternoon),
            text: TimePeriod.Afternoon,
            bgColor: 'red',
            icon: 'fas fa-cloud-sun'
        },
        {
            key: getEnumKeyByEnumValue(TimePeriod, TimePeriod.Night),
            text: TimePeriod.Night,
            bgColor: 'purple',
            icon: 'fas fa-moon'
        },
        {
            key: getEnumKeyByEnumValue(TimePeriod, TimePeriod.LateNight),
            text: TimePeriod.LateNight,
            bgColor: 'gray',
            icon: 'fas fa-cloud-moon'
        }
    ];

    const key = timePeriodSelection as keyof typeof TimePeriod;

    return (

        <div className="timeSelection__container">
            <h1 className="timeSelection__header">時段</h1>
            <div className="timeSelection__buttons">
                {timeOptions.map(option =>
                    <TimeSelectionButton
                        key={option.key}
                        bgStyle={`${timePeriodSelection === option.key ?
                            `bg-${option.bgColor}-400 scale-105 border-2 border-${option.bgColor}-600` :
                            `bg-${option.bgColor}-500`}`}
                        hoverStyle={`hover:bg-${option.bgColor}-300`}
                        iconStyle={option.icon}
                        text={option.text}
                        onClick={() => setTimePeriodSelection(option.key)}
                    />
                )}
            </div>
            <div className="timeSelection__input">
                <CustomDatepicker
                    selectedDate={selectedDate}
                    onSelectedDateChanged={(date: Date) => setSelectedDate(date)}
                />
            </div>
            <div>{TimePeriod[key]}</div>
            <div>{selectedDate.toString()}</div>
        </div>

    );
};

export default TimeSelection;