import { useState } from 'react';
import { handleSearchChange, handleSearch } from '@/todolist/services/index';
import { UseTodoState } from '@/todolist/types/index.type';
import { useTodoContext } from '@/todolist/context/todoContext';


const useTodoState: UseTodoState = () => {

    const todoContext = useTodoContext();

    const [searchKeyword, setSearchKeyword] = useState<string>('');

    const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleSearchChange(e, setSearchKeyword);
    }

    const search = () => {
        handleSearch(searchKeyword, todoContext.loadTodos);
    }


    return {
        isLoading: todoContext.isLoading,
        searchKeyword: searchKeyword,
        handleSearchChange: searchChange,
        handleSearch: search,
    };
}

export default useTodoState;
