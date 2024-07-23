import { useState } from "react";
import { UseTimeSelection } from "@/ledger/hooks/types";



const useTimeSelection = (): UseTimeSelection => {
    const [timeSelection, setTimeSelection] = useState('');

    return {
        timeSelection,
        setTimeSelection
    }
}


export default useTimeSelection;