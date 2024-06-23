import { SearchButtonProps } from '@/todolist/types/index.type';

const SearchButton: React.FC<SearchButtonProps> = ({ handleSearch }) => {
    return (
        <button
            className="todoList__searchButton"
            onClick={handleSearch}>
            <i className="fas fa-search"></i> {/* 搜尋 + */}
        </button>
    )
}

export default SearchButton;