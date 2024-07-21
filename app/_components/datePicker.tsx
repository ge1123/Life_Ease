'use client';
import '@/_styles/index.scss';
import React, { useState } from 'react';
import '@/_styles/index.scss';
import { Datepicker } from 'flowbite-react';

export interface DateInputProps {
    date: Date
}

const DateInput: React.FC<DateInputProps> = ({ date }) => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <>
            <Datepicker
                defaultDate={selectedDate}
                onSelectedDateChanged={() => setSelectedDate(date)}
                language={"chinese"}
            />
        </>
    )
}

export default DateInput;