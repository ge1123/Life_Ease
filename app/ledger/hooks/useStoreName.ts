import { useState } from "react";
import { UseStoreInfo } from "@/ledger/hooks/types";



const useStoreInfo = (): UseStoreInfo => {

    const [storeName, setStoreName] = useState<string>("");

    return {
        storeName,
        setStoreName
    }
}


export default useStoreInfo;