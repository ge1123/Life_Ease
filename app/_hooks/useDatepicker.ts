import { useState } from "react";

export default function useDatepicker() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return {
        selectedDate,
        setSelectedDate,
    };
}