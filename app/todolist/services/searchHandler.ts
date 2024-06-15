import { ChangeEvent, Dispatch, SetStateAction } from 'react';


type HandleSearchChange = (e: ChangeEvent<HTMLInputElement>, setSearchKeyword: Dispatch<SetStateAction<string>>) => void;
export const handleSearchChange: HandleSearchChange = (e, setSearchKeyword) => {
    setSearchKeyword(e.target.value);
};

type HandleSearch = (searchKeyword: string, loadTodos: (params: any) => void) => void;
export const handleSearch: HandleSearch = (searchKeyword, loadTodos) => {
    loadTodos({ title: searchKeyword });
};