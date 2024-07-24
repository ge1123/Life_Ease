import { useState } from "react";
import { UseCategory } from "@/ledger/hooks/types";



const useCategory = (): UseCategory => {

    const [category, setCategory] = useState<string>('');

    return {
        category,
        setCategory
    }
}


export default useCategory;