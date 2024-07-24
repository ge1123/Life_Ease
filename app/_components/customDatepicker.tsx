'use client';
import { Datepicker } from 'flowbite-react';
import React from 'react';
import { CustomDatePickerProps } from '@/_components/type/customDatepicker.type';



const CustomDatepicker: React.FC<CustomDatePickerProps> = ({ selectedDate, onSelectedDateChanged }) => {

    return (
        <>
            <Datepicker
                defaultDate={selectedDate}
                onSelectedDateChanged={onSelectedDateChanged}
                language='en'
            />
        </>
    )
}

export default CustomDatepicker;