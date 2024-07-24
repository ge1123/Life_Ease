import { useState } from "react";


export default function useDatepicker() {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    return {
        selectedDate,
        setSelectedDate,
    };
}