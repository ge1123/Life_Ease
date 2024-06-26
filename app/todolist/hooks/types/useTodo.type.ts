

type UseTodo = {
    isLoading: boolean;
    searchKeyword: string;
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSearch: () => void;
}

export type UseTodoState = () => UseTodo;