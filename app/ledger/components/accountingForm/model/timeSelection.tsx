import TimeSelectionButton from '@/ledger/components/accountingForm/button/timeSelectionButton';
import '@/ledger/styles/index.scss';
import React, { useState } from 'react';
import DateInput from '@/_components/datePicker';

const TimeSelection = () => {

    return (

        <div className="timeSelection__container">
            <h1 className="timeSelection__header">時間</h1>
            <div className="timeSelection__buttons">
                <TimeSelectionButton bgStyle='bg-yellow-500' hoverStyle='hover:bg-yellow-600 ' iconStyle='fas fa-sun mr-2' text='早' />
                <TimeSelectionButton bgStyle='bg-red-400 ' hoverStyle='hover:bg-red-500' iconStyle='fas fa-cloud-sun mr-2' text='午' />
                <TimeSelectionButton bgStyle='bg-purple-500 ' hoverStyle='hover:bg-purple-600' iconStyle='fas fa-moon mr-2' text='晚' />
            </div>
            <div className="timeSelection__input">
                <DateInput date={new Date} />
            </div>
        </div>

    );
};

export default TimeSelection;