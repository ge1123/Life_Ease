import TimeSelectionButton from '@/ledger/components/accountingForm/button/timeSelectionButton';
import '@/ledger/styles/index.scss';
import React from 'react';
import CustomDatepicker from '@/_components/customDatepicker';
import useTimeSelection from '@/ledger/hooks/useTimeSelection';

const TimeSelection = () => {

    const {
        timeSelection,
        setTimeSelection
    } = useTimeSelection();

    return (

        <div className="timeSelection__container">
            <h1 className="timeSelection__header">時間</h1>
            <div className="timeSelection__buttons">
                <TimeSelectionButton bgStyle={`${timeSelection === "早" ? "bg-amber-300 scale-105 border-2 border-amber-600" : "bg-amber-500"}`} hoverStyle='hover:bg-amber-300 ' iconStyle='fas fa-sun mr-2' text='早' onClick={() => setTimeSelection('早')} />
                <TimeSelectionButton bgStyle={`${timeSelection === "午" ? "bg-red-300 scale-105 border-2 border-red-600" : "bg-red-500"}`} hoverStyle='hover:bg-red-300' iconStyle='fas fa-cloud-sun mr-2' text='午' onClick={() => setTimeSelection('午')} />
                <TimeSelectionButton bgStyle={`${timeSelection === "晚" ? "bg-purple-300 scale-105 border-2 border-purple-600" : "bg-purple-500"}`} hoverStyle='hover:bg-purple-300' iconStyle='fas fa-moon mr-2' text='晚' onClick={() => setTimeSelection('晚')} />
            </div>
            <div className="timeSelection__input">
                <CustomDatepicker />
            </div>
        </div>

    );
};

export default TimeSelection;