import { useState } from "react";
import getTimePeriod from "@/_services/getTimePeriod";
import { UseTimePeriodSelection } from "@/ledger/hooks/types";



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