import { ChangeEvent, Dispatch, SetStateAction } from 'react';


export type HandleSearchChange = (e: ChangeEvent<HTMLInputElement>, setSearchKeyword: Dispatch<SetStateAction<string>>) => void;
export type HandleSearch = (searchKeyword: string, loadTodos: (params: any) => void) => void;
