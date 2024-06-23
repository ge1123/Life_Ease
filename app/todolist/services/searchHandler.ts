import {HandleSearchChange, HandleSearch} from '@/todolist/types/index.type';

export const handleSearchChange: HandleSearchChange = (e, setSearchKeyword) => {
    setSearchKeyword(e.target.value);
};

export const handleSearch: HandleSearch = (searchKeyword, loadTodos) => {
    loadTodos({ title: searchKeyword });
};