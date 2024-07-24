import { useState } from "react";
import { UseTimeSelection } from "@/ledger/hooks/types";
import getTimePeriod from "@/_services/getTimePeriod";



const useTimeSelection = (): UseTimeSelection => {

    // 自動抓取時間給予預設時段
    const timePeriod = getTimePeriod();

    const [timeSelection, setTimeSelection] = useState(timePeriod);

    return {
        timeSelection,
        setTimeSelection
    }
}


export default useTimeSelection;