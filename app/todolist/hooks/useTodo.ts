import { useState } from 'react';
import useTodoState from '@/todolist/hooks/useTodoState';
import { handleSearchChange, handleSearch, toggleModal } from '@/todolist/services/index';

const useTodo = () => {
    const {
        todos,
        loading,
        addTodoAsync: addTodo,
        deleteTodoAsync: deleteTodo,
        updateTodoAsync: updateTodo,
        loadTodosAsync: loadTodos
    } = useTodoState();

    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [showModal, setShowModal] = useState(false);

    return {
        todos,
        loading,
        searchKeyword,
        showModal,
        addTodo,
        deleteTodo,
        updateTodo,
        handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => handleSearchChange(e, setSearchKeyword),
        handleSearch: () => handleSearch(searchKeyword, loadTodos),
        toggleModal: () => toggleModal(setShowModal)
    };
};

export default useTodo;
