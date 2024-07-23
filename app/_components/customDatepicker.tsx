'use client';
import React from 'react';
import { Datepicker } from 'flowbite-react';
import useDateSelection from '@/_hooks/useDatepicker';
import { updateSelectedDate } from '@/_services/updateSelectedDate';



const CustomDatepicker: React.FC = () => {

    const { selectedDate, setSelectedDate } = useDateSelection();

    return (
        <>
            <Datepicker
                defaultDate={selectedDate}
                onSelectedDateChanged={(date) => updateSelectedDate(date, setSelectedDate)}
                language='en'
            />
        </>
    )
}

export default CustomDatepicker;