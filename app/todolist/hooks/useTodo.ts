import { useState } from 'react';
import useTodoState from '@/todolist/hooks/useTodoState';
import { handleSearchChange, handleSearch, toggleModalOpenState } from '@/todolist/services/index';
import { UseTodoHook } from '@/todolist/types/index.type';


const useTodo: UseTodoHook = () => {
    const {
        todos,
        loading,
        addTodoAsync: addTodo,
        deleteTodoAsync: deleteTodo,
        updateTodoAsync: updateTodo,
        loadTodosAsync: loadTodos
    } = useTodoState();

    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    return {
        todos,
        loading,
        searchKeyword,
        isModalOpen,
        addTodo,
        deleteTodo,
        updateTodo,
        handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => handleSearchChange(e, setSearchKeyword),
        handleSearch: () => handleSearch(searchKeyword, loadTodos),
        toggleModalOpenStatus: () => toggleModalOpenState(setIsModalOpen)
    };
};

export default useTodo;
