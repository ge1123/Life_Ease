import { useState } from "react";
import { UseTimePeriodSelection } from "@/ledger/hooks/types";
import getTimePeriod from "@/_services/getTimePeriod";



const useTimePeriodSelection = (): UseTimePeriodSelection => {

    // 自動抓取時間給予預設時段
    const timePeriod = getTimePeriod();

    const [timePeriodSelection, setTimePeriodSelection] = useState<string>(timePeriod);

    return {
        timePeriodSelection,
        setTimePeriodSelection
    }
}


export default useTimePeriodSelection;