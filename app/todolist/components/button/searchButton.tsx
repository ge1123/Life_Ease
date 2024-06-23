import { SearchButtonProps } from '@/todolist/types/index.type';
import BaseButton from '@/_components/baseButton';

const SearchButton: React.FC<SearchButtonProps> = ({ handleSearch }) => {

    return (
        <BaseButton
            onClick={handleSearch}
            icon={<i className="fas fa-search"></i> /* 搜尋 + */}
            className="todoList__searchButton"
        />
    );
}

export default SearchButton;